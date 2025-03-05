import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://tonqdfcbipwbdsxutafu.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvbnFkZmNiaXB3YmRzeHV0YWZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDExNTk3NjAsImV4cCI6MjA1NjczNTc2MH0.fkUHtW1gmcqwTNivsvo2IK2V7L2vRJv5vvWA3Phahgg";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
