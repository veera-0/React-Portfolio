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
    .order('created_at', { ascending: false });
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

export async function recordButtonClick(buttonId){
  const { error } = await supabase.rpc('increment_button_click', {
    p_button_id: buttonId
  });
  if (error) console.error(`Failed to record ${buttonId} click:`, error);
}

export async function recordProjectClick(projectId) {
  const { data, error: selectError } = await supabase
    .from('projectData')
    .select('project_click_count')
    .eq('project_id', projectId)
    .single();

  if (selectError && selectError.code !== 'PGRST116') {
    console.error('Failed to fetch project click count:', selectError);
    return;
  }

  const currentCount = data?.project_click_count ?? 0;
  const nextCount = currentCount + 1;

  const { error } = await supabase
    .from('projectData')
    .update({ project_click_count: nextCount })
    .eq('project_id', projectId);

  if (error) {
    console.error(`Failed to record click for project ${projectId}:`, error);
  }
}

export default supabase;