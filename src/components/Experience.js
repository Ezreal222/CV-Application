import React, { Component } from 'react';

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: '',
      positionTitle: '',
      mainTasks: '',
      startDate: '',
      endDate: '',
      showForm: false,
      submittedData: [],
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  toggleForm = () => {
    this.setState((prevState) => ({ showForm: !prevState.showForm }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { companyName, positionTitle, mainTasks, startDate, endDate } =
      this.state;
    this.setState((prevState) => ({
      submittedData: [
        ...prevState.submittedData,
        { companyName, positionTitle, mainTasks, startDate, endDate },
      ],
      companyName: '',
      positionTitle: '',
      mainTasks: '',
      startDate: '',
      endDate: '',
      showForm: false,
    }));
  };

  render() {
    const {
      companyName,
      positionTitle,
      mainTasks,
      startDate,
      endDate,
      showForm,
      submittedData,
    } = this.state;

    return (
      <div className="experience">
        <h2 class="experience-head">Experience</h2>
        {submittedData.map((experience, index) => (
          <div key={index} class="experience-unit">
            <p>Company Name: {experience.companyName}</p>
            <p>Position Title: {experience.positionTitle}</p>
            <p>Main Tasks: {experience.mainTasks}</p>
            <p>Start Date: {experience.startDate}</p>
            <p>End Date: {experience.endDate}</p>
          </div>
        ))}
        <button onClick={this.toggleForm} class="add-experience">Add Experience</button>
        {showForm && (
          <div className="edit-container">
            <form className="edit-form-3" onSubmit={this.handleSubmit}>
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
              <input
                type="text"
                name="mainTasks"
                placeholder="Main Tasks"
                value={mainTasks}
                onChange={this.handleChange}
              />
              <input
                type="text"
                name="startDate"
                placeholder="Start Date"
                value={startDate}
                onChange={this.handleChange}
              />
              <input
                type="text"
                name="endDate"
                placeholder="End Date"
                value={endDate}
                onChange={this.handleChange}
              />
              <button type="submit">Submit</button>
              <button onClick={this.toggleForm}>Close</button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default Experience;