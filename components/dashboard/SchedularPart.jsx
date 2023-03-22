import React, {useState} from 'react'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
// import '@fullcalendar/core/main.css';
// import '@fullcalendar/daygrid/main.css';
// import '@fullcalendar/timegrid/main.css';

const Schedular = () => {
    const [events, setEvents] = React.useState([]);
    function handleDateSelect(selectInfo) {
  let title = prompt('Please enter a new event title:');
  let calendarApi = selectInfo.view.calendar;

  if (title) {
    calendarApi.addEvent({
      title,
      start: selectInfo.startStr,
      end: selectInfo.endStr,
        allDay: selectInfo.allDay,
    backgroundColor: 'red',
      display: 'inverse-background'
    });
  }
}

    function handleEventClick(clickInfo) {
  if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'?`)) {
    clickInfo.event.remove();
  }
}

    
  return (
     <FullCalendar
    plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
    headerToolbar={{
      right: 'prev,next',
    //   center: 'title',
    //   right: 'dayGridMonth,timeGridWeek,timeGridDay'
    }}
          width={"90vw"}
    initialView="dayGridMonth"
    selectable={true}
    selectMirror={true}
    dayMaxEvents={true}
    weekends={true}
    events={events}
    dateClick={handleDateSelect}
    eventClick={handleEventClick}
  />
  )
}

export default Schedular