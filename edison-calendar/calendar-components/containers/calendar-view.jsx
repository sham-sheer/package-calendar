import React, { Component } from 'react';
import $ from 'jquery';
import '../../node_modules/moment/min/moment.min.js';
import '../../node_modules/fullcalendar/dist/fullcalendar.js';
import EventCreationForm from '../components/event-creation-form';
import { Link, withRouter } from 'react-router-dom';

class CalendarView extends Component {
  static displayName = 'CalendarView';

  state = {
    calendarEvents: [
      {
      title: 'Event1',
      start: 'Wed Nov 28 2018 00:00:00 GMT+0000',
      end: 'Wed Nov 28 2018 03:00:00 GMT+0000'
      },
      {
      title: 'Event2',
      start: 'Mon Nov 26 2018 00:00:00 GMT+0000',
      end: 'Mon Nov 26 2018 04:00:00 GMT+0000'
      }
    ],
  }

  onDayClick = (date, jsEvent, view) => {
    this.props.history.push(`/${date}`);
  }

  componentDidMount(){
    $('#calendar').fullCalendar({
      header: {
        left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
      },
      editable: true,
      events: this.state.calendarEvents,
      dayClick: this.onDayClick
    });
  }



  render() {
    return <div id='calendar'></div>;
  }
}

export default withRouter(CalendarView);
