// Project model for type checking

/**
 * @typedef {Object} Project
 * @property {number} [project_id]
 * @property {number} [profile_id]
 * @property {string} projecttitle
 * @property {string} techused
 * @property {string} projectdescription
 * @property {string} project_link
 * @property {string} created_at
 * @property {string} [project_ImageUrl]
 */

/**
 * @type {Project}
 */
export const ProjectModel = {
  project_id: undefined,
  profile_id: undefined,
  projecttitle: '',
  techused: '',
  projectdescription: '',
  project_link: '',
  created_at: '',
  project_ImageUrl: undefined,
};