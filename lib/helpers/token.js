import jwt from "jsonwebtoken";

const secret = process.env.JWT_PRIVATE_KEY;

export function generateAccessToken(payload) {
  return jwt.sign(payload, secret);
}

// verify access token
export function verifyAccessToken(token) {
  try {
    const payload = jwt.verify(token, secret);
    return payload;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export function generateToken(length) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let token = "";
  for (let i = 0; i < length; i++) {
    token += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return token;
}
