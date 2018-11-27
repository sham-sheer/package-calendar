import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class EventCreationForm extends React.Component {

  static displayName = 'EventCreationForm';

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      startTime: '',
      endTime: '',
      allDay: false,
      desc: '',

    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="event-form">
      <div className="form-title">
        New Event
      </div>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label className="title-label">
          <input
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.handleInputChange}
           />
           <span className="floating-label">Title</span>
        </label>
        <br />
        <label className="start-time-label">
          <input
            name="startTime"
            type="time"
            value={this.state.startTime}
            onChange={this.handleInputChange} />
            <span className="floating-label">Start Time:</span>
        </label>
        <br />
        <label>
          <input
            name="endTime"
            type="time"
            value={this.state.endTime}
            onChange={this.handleInputChange} />
            <span className="floating-label">End Time:</span>
        </label>
        <br />
        <label>
          <span className="checkbox-floating-label">All Day</span>
          <input
            name="allDay"
            type="checkbox"
            checked={this.state.allDay}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          <input
            name="desc"
            type="text"
            checked={this.state.desc}
            onChange={this.handleInputChange} />
            <span className="floating-label">Add description</span>
        </label>
        <input type="submit" value ="Submit" />
      </form>
      </div>
    );
  }
}

export default withRouter(EventCreationForm);
