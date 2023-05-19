export async function isLoggedIn(res, session, User) {
  console.log(session);
  if (!session) {
    return res.status(401).json({
      success: false,
      message: "Please sign in to continue",
    });
  }
  const user = await User.findById(session?.user._id);
  if (!user) {
    return res.status(400).json({
      success: false,
      message: "Invalid user account",
    });
  }

  return user;
}
