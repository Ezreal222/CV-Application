import React, { Component } from 'react';

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolName: '',
      titleOfStudy: '',
      dateOfStudy: '',
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
    const { schoolName, titleOfStudy, dateOfStudy } = this.state;
    this.setState((prevState) => ({
      submittedData: [
        ...prevState.submittedData,
        { schoolName, titleOfStudy, dateOfStudy },
      ],
      schoolName: '',
      titleOfStudy: '',
      dateOfStudy: '',
      showForm: false,
    }));
  };

  render() {
    const { schoolName, titleOfStudy, dateOfStudy, showForm, submittedData } =
      this.state;

    return (
      <div className="education">
        <h2 class="education-head">Education</h2>
        {submittedData.map((education, index) => (
          <div key={index} class="education-unit">
            <p>School Name: {education.schoolName}</p>
            <p>Title of Study: {education.titleOfStudy}</p>
            <p>Date of Study: {education.dateOfStudy}</p>
          </div>
        ))}
        <button onClick={this.toggleForm} class="add-education">Add Education</button>
        {showForm && (
          <div className="edit-container">
            <form className="edit-form-2" onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="schoolName"
                placeholder="School Name"
                value={schoolName}
                onChange={this.handleChange}
              />
              <input
                type="text"
                name="titleOfStudy"
                placeholder="Title of Study"
                value={titleOfStudy}
                onChange={this.handleChange}
              />
              <input
                type="text"
                name="dateOfStudy"
                placeholder="Date of Study"
                value={dateOfStudy}
                onChange={this.handleChange}
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default Education;
