/* eslint jsx-a11y/tabindex-no-positive: 0 */
import React, { Component } from 'react';
import Root from '../calendar-components/containers/Root';


export default class CalendarContainer extends React.Component {
  static displayName = 'CalendarContainer';

  render() {
    return (
      <div className="calendar-container">
        <Root />
      </div>
    )
  }
}
