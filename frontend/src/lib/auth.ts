import { useEffect, useState } from 'react';
export interface UserProfile { sub: string; name: string; email: string; picture?: string; idToken?: string; refreshToken?: string }
const KEY='pawpath_user';
export const getCurrentUser=():UserProfile|null=>{try{const raw=localStorage.getItem(KEY);return raw?JSON.parse(raw):null}catch{return null}};
export const saveUser=(u:UserProfile)=>localStorage.setItem(KEY,JSON.stringify(u));
export const clearUser=()=>localStorage.removeItem(KEY);
// Sign-out must end the server session too: pawpath_session is an HttpOnly,
// 30-day cookie, so clearing local state alone would leave a live credential in
// the browser. The revoke call is best-effort — a network failure must never
// block or break sign-out, so we swallow it and clear client state either way.
export const signOut=async()=>{
  try{await fetch('/api/auth/logout',{method:'POST'})}catch{}
  clearUser(); window.dispatchEvent(new Event('storage'));
};
export function useAuth(){const [user,setUser]=useState<UserProfile|null>(getCurrentUser);useEffect(()=>{const sync=()=>setUser(getCurrentUser());window.addEventListener('storage',sync);return()=>window.removeEventListener('storage',sync)},[]);return {user};}
