import React, { Component } from 'react';



class About extends Component {
    render() {
        return (
        <div className="background">
            <h1>About Me</h1>
            <div className="about-container">
                <span>Name:</span>
                <p>Keith Lindner</p>
                <span>Info:</span>
                <p>I'm currently a Computer Science Student at SNHU. <br /> I've been studing Web development for 3 years in between my schooling, job and family. <br />
                I have excellent knowledge of <strong>HTML, CSS, and Javascript</strong>. <br />I do enjoy building web apps, and applications. <br /> I find this to be very rewarding and challenging at times.
                </p>
            </div>
        </div>
        )
    }
}

export default About;