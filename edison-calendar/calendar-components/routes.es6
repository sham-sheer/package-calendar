import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './containers/App';
import CalendarView from './containers/calendar-view';
import EventCreationForm from './components/event-creation-form';

export default () => (
  <App>
    <Switch>
      <Route exact path="/" component={CalendarView} />
      <Route path="/create-event" component={EventCreationForm} />
    </Switch>
  </App>
);
