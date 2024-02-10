import { createClient } from '@supabase/supabase-js';

// ToDo Koray: Supabase URL und Key eintragen
const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY';
const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);

export default supabaseClient;
