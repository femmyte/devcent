// // import React, { useState, useEffect } from "react";
// import { google } from "googleapis";

// const Calendar = () => {
//   const [isSignedIn, setIsSignedIn] = useState(false);
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     const initClient = async () => {
//       await window.gapi.client.init({
//         apiKey: YOUR_API_KEY,
//         clientId: YOUR_CLIENT_ID,
//         discoveryDocs: [
//           "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
//         ],
//         scope: "https://www.googleapis.com/auth/calendar.readonly",
//       });

//       const auth2 = window.gapi.auth2.getAuthInstance();
//       setIsSignedIn(auth2.isSignedIn.get());

//       auth2.isSignedIn.listen(handleAuthChange);
//     };

//     const handleAuthChange = () => {
//       const auth2 = window.gapi.auth2.getAuthInstance();
//       setIsSignedIn(auth2.isSignedIn.get());
//     };

//     const fetchEvents = async () => {
//       const calendar = google.calendar("v3");
//       const res = await calendar.events.list({
//         calendarId: "primary",
//         timeMin: new Date().toISOString(),
//         timeMax: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
//         showDeleted: false,
//         singleEvents: true,
//         orderBy: "startTime",
//       });
//       setEvents(res.data.items);
//     };

//     window.gapi.load("client:auth2", () => {
//       initClient();
//     });
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const handleSignIn = async () => {
//     const auth2 = window.gapi.auth2.getAuthInstance();
//     const res = await auth2.signIn();
//     setIsSignedIn(auth2.isSignedIn.get());
//     const accessToken = res.getAuthResponse().access_token;
//     fetchEvents(accessToken);
//   };

//   const handleSignOut = () => {
//     const auth2 = window.gapi.auth2.getAuthInstance();
//     auth2.signOut();
//     setIsSignedIn(false);
//     setEvents([]);
//   };

//   return (
//     <div>
//       {isSignedIn ? (
//         <div>
//           <h2>Upcoming events</h2>
//           <ul>
//             {events.map((event) => (
//               <li key={event.id}>
//                 {event.summary} -{" "}
//                 {new Date(event.start.dateTime).toLocaleString()}
//               </li>
//             ))}
//           </ul>
//           <button onClick={handleSignOut}>Sign out</button>
//         </div>
//       ) : (
//         <button onClick={handleSignIn}>Sign in with Google</button>
//       )}
//     </div>
//   );
// };

// export default Calendar;
