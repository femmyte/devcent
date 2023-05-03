export function createUrlName(name, id) {
  // replace all special characters
  let urlName = name.trim();
  urlName = urlName.replace(/[^a-zA-Z0-9 ]/g, "");
  urlName = urlName.replace(/\s+/g, "-");
  urlName = urlName + "-" + id;

  return urlName;
}
