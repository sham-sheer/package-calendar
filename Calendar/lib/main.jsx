import { ComponentRegistry, WorkspaceStore } from 'mailspring-exports';
import React, { Component } from 'react';
import CalendarView from './calendar-view';


class CalendarContainer extends Component {
  static displayName = 'CalendarView';
  render() {
    return (
      <div className="calendar-view-container">
        <CalendarView />
      </div>
    )
  }
}

module.exports = {
  activate() {
      ComponentRegistry.register(CalendarContainer, {
        location: WorkspaceStore.Location.RootSidebar
      });
  },

  deactivate() {
    ComponentRegistry.unregister(CalendarContainer);
  },
};
