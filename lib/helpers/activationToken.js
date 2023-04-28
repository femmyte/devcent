import jwt from "jsonwebtoken";

export function generateToken(payload, expires) {
  return jwt.sign(payload, process.env.NEXT_PUBLIC_JWT_PRIVATE_KEY, {
    expiresIn: expires,
  });
}
