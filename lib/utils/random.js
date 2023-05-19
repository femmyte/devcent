// generate a random number not less than five digits
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

// Generate 10 digit user ID
export function generateUserId(usersCount) {
  const userNumber = (usersCount + 1).toString();
  const year = new Date(Date.now()).getFullYear();
  const userId = year + userNumber.padStart(4, "0");

  return userId;
}
