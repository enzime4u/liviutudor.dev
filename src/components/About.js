import React, { Component } from "react";
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt="" />
          </div>

          <div className="nine columns main-col">
            <h2>
              <span>About Me</span>
            </h2>
            <p>" {resumeData.aboutme} "</p>
            {/* 
            <div className="row">
              <div className="columns contact-details">
                <h2 className='contact-details-margin'>Contact Details</h2>
                <br />
                <p className="address">
                  <span>{resumeData.name}</span>
                  <span>{resumeData.address}</span>
                  <span>{resumeData.email}</span>
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    );
  }
}
