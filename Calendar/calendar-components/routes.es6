import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './containers/App';
import MyCalendarTab from './components/my-calendar-tab';
import EventCreationForm from '../components/event-creation-form';

export default () => (
  <App>
    <Switch>
      <Route exact path="/" component={MyCalendarTab} />
      <Route path="/create-event" component={EventCreationForm} />
    </Switch>
  </App>
);
