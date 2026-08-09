function jsonError(res, status, error, code) {
  const body = code ? { error, code } : { error };
  return res.status(status).json(body);
}
function milesBetween(a, b) {
  const radians = (value) => value * Math.PI / 180;
  const dLat = radians(b.lat - a.lat); const dLng = radians(b.lng - a.lng);
  const x = Math.sin(dLat / 2) ** 2 + Math.cos(radians(a.lat)) * Math.cos(radians(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 3958.8 * 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
}
function addressParts(address = '') {
  const parts = address.split(',').map((part) => part.trim()).filter(Boolean);
  const stateZip = parts[parts.length - 1] || '';
  const match = stateZip.match(/([A-Z]{2})\s+(\d{5}(?:-\d{4})?)/i);
  return { city: parts.length > 1 ? parts[parts.length - 2] : undefined, state: match?.[1], postcode: match?.[2] };
}
export default async function handler(req, res) {
  const zip = String(req.query?.zip || '').trim();
  if (!/^\d{5}$/.test(zip)) return jsonError(res, 400, 'Please enter a valid 5-digit ZIP code.');
  const key = process.env.GOOGLE_PLACES_API_KEY;
  if (!key) return jsonError(res, 503, 'The rescue directory is being set up. Please check back soon.', 'NOT_CONFIGURED');
  try {
    const geoResponse = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(zip)}&key=${encodeURIComponent(key)}`);
    if (!geoResponse.ok) throw new Error('Geocoding unavailable');
    const geo = await geoResponse.json();
    const location = geo.results?.[0]?.geometry?.location;
    if (!location) return jsonError(res, 404, 'No location found for that ZIP code.');
    const placesResponse = await fetch('https://places.googleapis.com/v1/places:searchText', {
      method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Goog-Api-Key': key, 'X-Goog-FieldMask': 'places.displayName,places.formattedAddress,places.nationalPhoneNumber,places.websiteUri,places.rating,places.distanceMeters,places.location' },
      body: JSON.stringify({ textQuery: 'animal shelter OR animal rescue', locationBias: { circle: { center: { latitude: location.lat, longitude: location.lng }, radius: 30000 } }, maxResultCount: 12 })
    });
    if (!placesResponse.ok) throw new Error('Places unavailable');
    const places = (await placesResponse.json()).places || [];
    const organizations = places.map((place) => {
      const formattedAddress = place.formattedAddress || '';
      const parts = addressParts(formattedAddress);
      const placeLocation = place.location && { lat: place.location.latitude, lng: place.location.longitude };
      const distance = place.distanceMeters != null ? place.distanceMeters / 1609.34 : (placeLocation ? milesBetween(location, placeLocation) : undefined);
      return { name: place.displayName?.text || 'Animal shelter', distance, formattedAddress, city: parts.city, state: parts.state, postcode: parts.postcode, phone: place.nationalPhoneNumber, website: place.websiteUri, rating: place.rating };
    });
    return res.status(200).json({ organizations });
  } catch (error) { return jsonError(res, 502, 'We could not reach the rescue directory right now. Please try again.'); }
}
