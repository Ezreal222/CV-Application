import React, { Component } from 'react';

class GeneralInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phoneNumber: '',
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
    const { name, email, phoneNumber, editMode } = this.state;

    return (
      <div className="general-information">
        <div>
          <h2 class="info-head">General Information</h2>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Phone Number: {phoneNumber}</p>
          <button onClick={this.toggleEditMode}>Edit</button>
        </div>

        {editMode && (
          <div class="edit-container">
            <div class="edit-form-1">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={this.handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={this.handleChange}
                />
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={phoneNumber}
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

export default GeneralInformation;
