export function isAllowedMethod(req, res, method) {
  if (req.method === method) {
    return true;
  } else {
    res.setHeader("Allow", [method]);
    res.status(405).json({
      success: false,
      message: `Method ${req.method} Not Allowed`,
    });

    return false;
  }
}
