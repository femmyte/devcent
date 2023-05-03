export function generateId(length = length > 5 ? length : 8) {
  const timestamp = Date.now().toString();
  length = length - 5;

  const chars = timestamp;
  let id = "";
  for (let i = 0; i < length; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  let timestampFraction = timestamp.slice(
    timestamp.length - 5,
    timestamp.length
  );
  id = id + timestampFraction;
  return id;
}
