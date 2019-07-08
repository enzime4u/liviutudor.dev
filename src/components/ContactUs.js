import React, { Component } from "react";
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <h2 class="title">
            <span>Contact Me</span>
          </h2>
          <div className="twelve columns">
            <p className="lead">
              Feel free to contact me on{" "}
              <a href={resumeData.twitter}>
                <span className="social-link">Twitter</span>
              </a>{" "}
              or{" "}
              <a href={resumeData.github}>
                <span className="social-link">GitHub</span>
              </a>{" "}
              or send me an{" "}
              <a href={resumeData.email}>
                <span className="social-link">email</span>
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    );
  }
}
