// we can get the user in different ways either from session, localStorage, or redux
import {
  useSetSessionStorage,
  useGetSessionStorage,
  UseRemoveSessionStorage,
} from "./useSessionStorage";
export const getUser = () => {
  const userStr = useGetSessionStorage("admin");
  if (userStr) return JSON.parse(userStr);
  else return null;
};

export const getToken = () => {
  return useGetSessionStorage("token") || null;
};

export const setUserSession = (user) => {
  const token = user.accessToken;
  const admin = user.admin;
  useSetSessionStorage("token", token);
  useSetSessionStorage("admin", JSON.stringify(admin));
};

export const removeUserSession = () => {
  UseRemoveSessionStorage("token");
};

// import withSession from '../lib/session';

// export const getUserSession(async (req, res) => {
//   const user = req.session.get('user');

//   if (!user) {
//     res.status(401).json({ message: 'Unauthorized' });
//     return;
//   }

//   // Your handler code goes here
// });

// export const setUserSession(async (req, res) => {
//   const user = { id: 1, name: 'John' };
//   req.session.set('user', user);
//   await req.session.save();

//   res.status(200).json({ message: 'User is set in the session' });
// });