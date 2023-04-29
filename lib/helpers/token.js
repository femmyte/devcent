import jwt from "jsonwebtoken";

export function generateJwt(payload, expires) {
  return jwt.sign(payload, process.env.NEXT_PUBLIC_JWT_PRIVATE_KEY, {
    expiresIn: expires,
  });
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
