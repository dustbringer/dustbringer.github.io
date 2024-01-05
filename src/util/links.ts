export const isSameLink = (l1: string, l2: string) =>
  l1 !== undefined &&
  l2 !== undefined &&
  l1.replace(/^\/+|\/+$/g, "") === l2.replace(/^\/+|\/+$/g, "");

/**
 * Checks if the first level in paths are the same.
 * For example /hi/its/me and /hi/how/are/you have the same /hi path
 */
export const isSamePrefix = (l1: string, l2: string) =>
  l1 !== undefined &&
  l2 !== undefined &&
  l1.match(/^\/?([^\/]*)/)?.[1] === l2.match(/^\/?([^\/]*)/)?.[1];
