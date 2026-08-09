// Vercel serverless endpoint for owner-managed Stripe Checkout verification.
export default async function handler(req, res) {
  const sessionId = req.method === 'GET' ? req.query?.session_id : req.body?.session_id;
  if (!sessionId || typeof sessionId !== 'string') return res.status(400).json({ ok: false });
  const secret = process.env.STRIPE_SECRET_KEY;
  if (!secret) return res.status(500).json({ ok: false });
  try {
    const response = await fetch(`https://api.stripe.com/v1/checkout/sessions/${encodeURIComponent(sessionId)}?expand[]=line_items.data.price`, { headers: { Authorization: `Bearer ${secret}` } });
    if (!response.ok) return res.status(response.status === 404 ? 404 : 400).json({ ok: false });
    const session = await response.json();
    if (session.payment_status !== 'paid') return res.status(402).json({ ok: false });
    const metadataProduct = session.metadata?.product;
    const amount = session.amount_total ?? session.line_items?.data?.[0]?.amount_total;
    const product = metadataProduct === 'premium' || metadataProduct === 'slot' ? metadataProduct : amount === 499 || amount === 4990 ? 'premium' : amount === 299 || amount === 2990 ? 'slot' : null;
    if (!product) return res.status(400).json({ ok: false });
    return res.status(200).json({ ok: true, product });
  } catch { return res.status(500).json({ ok: false }); }
}
