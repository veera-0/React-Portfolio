// Education model for type checking

/**
 * @typedef {Object} Education
 * @property {number} education_id
 * @property {number} profile_id
 * @property {string} educationInfo
 * @property {string} year
 * @property {string} educationLevel
 * @property {string} created_at
 */

/**
 * @type {Education}
 */
export const defaultEducation = {
  education_id: 0,
  profile_id: 0,
  educationInfo: '',
  year: '',
  educationLevel: '',
  created_at: '',
};