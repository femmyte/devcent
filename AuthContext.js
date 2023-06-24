import dayjs from "dayjs";
import { useContext, createContext } from "react";
import { useState, useEffect, useReducer, useMemo } from "react";
import { getSession, useSession } from "next-auth/react";

const AuthContext = createContext();

const savedEventsReducer = (state, { type, payload }) => {
  // this will check the type of event we are trying to do if it is push, pop
  switch (type) {
    // this will add item to our reducer
    case "push":
      return [...state, payload];
    // this will map through the current state and check if the event Id is the same with the payload Id if it is it will update state with the new payload
    case "update":
      return state.map((evt) => (evt.id === payload.id ? payload : evt));
    case "delete":
      return state.filter((evt) => evt.id !== payload.id);
    default:
      // throw new Error();
      break;
  }
};
// let parsedEvents;
// const initEvents = () => {
// 	const storageEvents = localStorage.getItem('savedEvents');
// 	const parsedEvents =
// 		storageEvents.length > 1 ? JSON.parse(storageEvents) : [];

// 	return parsedEvents;
// };
// console.log(initEvents());
export const AuthContextProvider = ({ children }) => {
  // const [user, setUser] = useState('');
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState();
  const [screenSize, setScreenSize] = useState(undefined);
  const [darkToggle, setDarkToggle] = useState(false);
  let login = false;

  const session = useSession();
  let authenticated = session.status === "authenticated";
  let user = null;
  if (authenticated) {
    user = session.data?.user;
  }
  // console.log(session);

  const handleClick = (clicked) => {
    setIsClicked({ ...isClicked, [clicked]: true });
  };

  // Calendar Contexts
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
  const [daySelected, setDaySelected] = useState(dayjs());
  const [showEventModal, setShowEventModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [storageEvents, setStorageEvents] = useState([]);
  const [labels, setLabels] = useState([true]);
  const [dayEvent, setDayEvent] = useState([]);
  const [evtday, setDay] = useState([]);
  const [isBusy, setIsBusy] = useState(true);

  useEffect(() => {
    // setStorageEvents(initEvents());
    const parsedEvents = JSON.parse(localStorage.getItem("savedEvents"));
    if (parsedEvents) {
      setStorageEvents(parsedEvents);
    }
  }, []);
  const [savedEvents, dispatchCalEvent] = useReducer(
    savedEventsReducer,
    // [],
    storageEvents
  );

  useEffect(() => {
    setLabels((prevlabels) => {
      return [...new Set(savedEvents.map((evt) => evt.label))].map((label) => {
        const currentLabel = prevlabels.find((lbl) => lbl.label === label);
        return {
          label,
          checked: currentLabel ? currentLabel.checked : true,
        };
      });
    });
  }, [savedEvents]);

  const filteredEvents = useMemo(() => {
    return savedEvents.filter((evt) =>
      labels
        .filter((lbl) => lbl.checked)
        .map((lbl) => lbl.label)
        .includes(evt.label)
    );
  }, [savedEvents, labels]);
  useEffect(() => {
    localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
  }, [savedEvents]);
  useEffect(() => {
    if (smallCalendarMonth !== null) {
      setMonthIndex(smallCalendarMonth);
    }
  }, [smallCalendarMonth]);
  const updateLabel = (label) => {
    setLabels(labels.map((lbl) => (lbl.label === label.label ? label : lbl)));
  };
  useEffect(() => {
    if (!showEventModal) {
      setSelectedEvent(null);
    }
  }, [showEventModal]);

  // useEffect(() => {
  // 	const events = filteredEvents?.filter(
  // 		(evt) =>
  // 			dayjs(evt.day).format('DD-MM-YY') === day.format('DD-MM-YY')
  // 	);
  // 	setDayEvent(events);
  // }, [filteredEvents, day]);
  return (
    <AuthContext.Provider
      value={{
        login,
        // setUser,
        user,
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        darkToggle,
        setDarkToggle,
        monthIndex,
        setMonthIndex,
        smallCalendarMonth,
        setSmallCalendarMonth,
        daySelected,
        setDaySelected,
        showEventModal,
        setShowEventModal,
        dispatchCalEvent,
        savedEvents,
        selectedEvent,
        setSelectedEvent,
        isBusy,
        labels,
        setLabels,
        updateLabel,
        filteredEvents,
        dayEvent,
        setDayEvent,
        evtday,
        setDay,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useStateContext = () => {
  return useContext(AuthContext);
};
