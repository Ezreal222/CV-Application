import React, { Component } from 'react';

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: '',
      positionTitle: '',
      mainTasks: '',
      fromDate: '',
      untilDate: '',
      editMode: false,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  toggleEditMode = () => {
    this.setState((prevState) => ({ editMode: !prevState.editMode }));
  };

  render() {
    const { companyName, positionTitle, mainTasks, fromDate, untilDate, editMode } = this.state;

    return (
      <div className="experience">
          <div>
            <h2>Experience</h2>
            <p>Company Name: {companyName}</p>
            <p>Position Title: {positionTitle}</p>
            <p>Main Tasks: {mainTasks}</p>
            <p>From: {fromDate}</p>
            <p>Until: {untilDate}</p>
            <button onClick={this.toggleEditMode}>Edit</button>
          </div>

        {editMode && (
          <div class="edit-container">
            <div class="edit-form-3">
                <input
                  type="text"
                  name="companyName"
                  placeholder="Company Name"
                  value={companyName}
                  onChange={this.handleChange}
                />
                <input
                  type="text"
                  name="positionTitle"
                  placeholder="Position Title"
                  value={positionTitle}
                  onChange={this.handleChange}
                />
                <textarea
                  name="mainTasks"
                  placeholder="Main Tasks"
                  value={mainTasks}
                  onChange={this.handleChange}
                />
                <input
                  type="date"
                  name="fromDate"
                  value={fromDate}
                  onChange={this.handleChange}
                />
                <input
                  type="date"
                  name="untilDate"
                  value={untilDate}
                  onChange={this.handleChange}
                />
                <button onClick={this.toggleEditMode}>Close</button>
            </div>
          </div>        
        )}
      </div>
    );
  }
}

export default Experience;
