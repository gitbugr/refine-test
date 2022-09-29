import { createClient } from "@pankod/refine-supabase";

const SUPABASE_URL = "https://iyowdieobqiuoswnuwqz.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml5b3dkaWVvYnFpdW9zd251d3F6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ0ODU2OTQsImV4cCI6MTk4MDA2MTY5NH0.L4QHISsFNtPcRAJ3APjQMDCabtQH0AgwPTeMfawxics";

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);
