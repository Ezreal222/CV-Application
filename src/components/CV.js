import React, { Component } from 'react';
import Info from './Info';
import Education from './Education';
import Experience from './Experience';

class Resume extends Component {
    render() {
        return (
            <div className="resume">

                <Info />

                <Education />

                <Experience />
            </div>
        );
    }
}

export default Resume;