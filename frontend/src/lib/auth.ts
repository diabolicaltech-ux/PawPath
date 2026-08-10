import { useEffect, useState } from 'react';
export interface UserProfile { sub: string; name: string; email: string; picture?: string; idToken?: string }
const KEY='pawpath_user';
export const getCurrentUser=():UserProfile|null=>{try{const raw=localStorage.getItem(KEY);return raw?JSON.parse(raw):null}catch{return null}};
export const saveUser=(u:UserProfile)=>localStorage.setItem(KEY,JSON.stringify(u));
export const clearUser=()=>localStorage.removeItem(KEY);
export const signOut=()=>{clearUser(); window.dispatchEvent(new Event('storage'));};
export function useAuth(){const [user,setUser]=useState<UserProfile|null>(getCurrentUser);useEffect(()=>{const sync=()=>setUser(getCurrentUser());window.addEventListener('storage',sync);return()=>window.removeEventListener('storage',sync)},[]);return {user};}
