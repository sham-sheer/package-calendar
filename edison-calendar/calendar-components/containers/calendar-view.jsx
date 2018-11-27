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
      start: '2018-11-04'
      },
      {
      title: 'Event2',
      start: '2018-11-25'
      }
    ],
    createEvent: false
  }

  onDayClick = (date, jsEvent, view) => {
    alert('Clicked on: ' + date.format());
    this.props.history.push('/create-event');
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
    if(this.state.createEvent) {
      return <EventCreationForm />
    }
    return <div id='calendar'></div>;
  }
}

export default withRouter(CalendarView);
