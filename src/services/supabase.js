// src/services/supabase.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://muxcnkuskkytjeynpsme.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im11eGNua3Vza2t5dGpleW5wc21lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQyNjE3NDIsImV4cCI6MjA1OTgzNzc0Mn0.Oxxsg7h-Fv20UjVY1xPKk_liNJEj2EuFHKFd7Qr2SFQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
