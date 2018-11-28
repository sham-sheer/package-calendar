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
      dateOfEvent: '',
      showStartMenu: false,
      showEndMenu: false
    };
  }

  componentDidMount() {
    const dateOfEvent = this.props.match.params.date;
    this.setState({
      dateOfEvent: dateOfEvent.substring(0, 15)
    })
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

  showStartMenu = (event) => {
    event.preventDefault();
    this.setState({ showStartMenu: true }, () => {
      document.addEventListener('click', this.closeStartMenu);
    });
  }

  closeStartMenu = () => {
    this.setState({ showStartMenu: false }, () => {
      document.removeEventListener('click', this.closeStartMenu);
    });
  }

  showEndMenu = (event) => {
    event.preventDefault();
    this.setState({ showEndMenu: true }, () => {
      document.addEventListener('click', this.closeEndMenu);
    });
  }

  closeEndMenu = () => {
    this.setState({ showEndMenu: false }, () => {
      document.removeEventListener('click', this.closeEndMenu);
    });
  }



  createDropDownList = () => {
    let list = [];
    for (let i = 0; i < 48; i++) {
      let hourInNumber = Math.floor(i/2);
      let hourInString = (i / 2 >= 10) ? `${hourInNumber}` : `0${hourInNumber}`;
      let minuteInString = (i % 2 == 0) ? '00' : '30';
      list.push(<button className="menu-button" onClick={this.saveTimeOfEvent}>{hourInString}:{minuteInString}</button>)
    }

    return list;
  }

  render() {
    return (
      <div className="event-form">
      <div className="form-title">
        New Event: {this.state.dateOfEvent}
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
        <div>

          <button onClick={this.showStartMenu} className="start-time-dropdown-button">
            <span className="floating-label">Start</span>
          </button>

          {
            this.state.showStartMenu
            ? (
              <div className="menu">
                {this.createDropDownList()}
              </div>
              )
              : (
                  null
                )
          }

        </div>
        </label>
        <br />
        <label>
        <div>
        
          <button onClick={this.showEndMenu} className="start-time-dropdown-button">
            <span className="floating-label">End</span>
          </button>

          {
            this.state.showEndMenu
            ? (
              <div className="menu">
                {this.createDropDownList()}
              </div>
              )
              : (
                  null
                )
          }

        </div>
        </label>
        <br />
        {/*<label>
          <span className="checkbox-floating-label">All Day</span>
          <input
            name="allDay"
            type="checkbox"
            checked={this.state.allDay}
            onChange={this.handleInputChange} />
        </label>
        <br />*/}
        <label>
          <input
            name="desc"
            type="text"
            checked={this.state.desc}
            onChange={this.handleInputChange} />
            <span className="floating-label">Add description</span>
        </label>
        <input type="submit" value ="Submit" className="submit-button" />
      </form>
      </div>
    );
  }
}

export default withRouter(EventCreationForm);
