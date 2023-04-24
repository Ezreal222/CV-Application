/*
import React, { Component } from 'react';

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolName: '',
      titleOfStudy: '',
      dateOfStudy: '',
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
    const { schoolName, titleOfStudy, dateOfStudy, editMode } = this.state;

    return (
      <div className="education">
          <div>
            <h2>Education</h2>
            <p>School Name: {schoolName}</p>
            <p>Major: {titleOfStudy}</p>
            <p>Date of Study: {dateOfStudy}</p>
            <button onClick={this.toggleEditMode}>Edit</button>
          </div>

        {editMode && (
          <div class="edit-container">
            <div class="edit-form-2">
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
                  placeholder="Major"
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
                <button onClick={this.toggleEditMode}>Close</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Education;
*/

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
        <h2>Education</h2>
        {submittedData.map((education, index) => (
          <div key={index}>
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
