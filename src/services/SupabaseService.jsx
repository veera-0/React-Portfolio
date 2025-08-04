import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Fetch profile data from 'profiles' table
export async function getProfile(userId) {
  const { data, error } = await supabase
    .from('profileDB')
    .select('Name,about')
    .eq('id', userId)
    .single();
  if (error) throw error;
  return data;
}

// Fetch all projects from 'projects' table
export async function getProjects() {
  const { data, error } = await supabase
    .from('projectData')
    .select('*')
    .order('created_at', { ascending: true });
  if (error) throw error;
  return data;
}

// Fetch education data from 'education' table
export async function getEducationData() {
  const { data, error } = await supabase
    .from('EducationData')
    .select('*')
    .order('education_id', { ascending: false });
  if (error) throw error;
  return data;
}

export default supabase;