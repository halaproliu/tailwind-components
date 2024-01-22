export function writeText(text) {
  try {
    return navigator.clipboard.writeText(text);
  } catch (e) {
    console.log("failed to copy", e);
    return Promise.reject(e);
  }
}
