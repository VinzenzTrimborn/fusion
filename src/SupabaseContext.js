// SupabaseContext.js
import { createContext } from 'react';
import supabase from './supabaseClient';

const SupabaseContext = createContext(supabase);

export default SupabaseContext;
