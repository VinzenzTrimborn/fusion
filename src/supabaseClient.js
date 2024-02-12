
// supabaseClient.js
//ToDo Koray: Supabase URL und Key eintragen
import { createClient } from "@supabase/supabase-js";


// ToDo Koray: Supabase URL und Key eintragen
const supabaseUrl = "https://dxtyocnuyrswspcakvmk.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4dHlvY251eXJzd3NwY2Frdm1rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQzNzYwNTMsImV4cCI6MjAxOTk1MjA1M30.bon8wwbU8q5X6H6Gr6-yeG2f_170MXy7nG9O-hS7GZ4";
const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);

export default supabaseClient;
