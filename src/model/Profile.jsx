// Profile model for type checking

/**
 * @typedef {Object} Profile
 * @property {number} [id]
 * @property {string} Name
 * @property {string} password
 * @property {string} email
 * @property {string} [created_at]
 * @property {string} about
 */

/**
 * @type {Profile}
 */
export const defaultProfile = {
  id: undefined,
  Name: '',
  password: '',
  email: '',
  created_at: undefined,
  about: '',
};