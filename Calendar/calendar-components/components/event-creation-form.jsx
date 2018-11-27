import React from 'react';

export default class EventCreationForm extends React.Component {

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
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="event-form">
      <div className="form-title">
        New Event
      </div>
      <form>
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

      </form>
      </div>
    );
  }
}
