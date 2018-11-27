/* eslint jsx-a11y/tabindex-no-positive: 0 */
import React, { Component } from 'react';
import Root from '../calendar-components/containers/Root';
import MyCalendarTab from './my-calendar-tab';


export default class CalendarView extends React.Component {
  static displayName = 'CalendarView';

  render() {
    return (
      <div className="calendar-view-container">
        <Root />
      </div>
    )
  }
}
