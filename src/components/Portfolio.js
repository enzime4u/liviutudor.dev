import React, { Component } from "react";

import Technologies from "./Technologies";

export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>
              <span>Check Out Some of My Works</span>
            </h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {resumeData.portfolio &&
                resumeData.portfolio.map(item => {
                  return (
                    <div className="columns portfolio-item">
                      <div className="item-wrap">
                        <a href={item.link}>
                          <img
                            src={`${item.imgurl}`}
                            className="item-img"
                            alt="portfolio small"
                          />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="technologies">
                        {console.log("item technologies", item.technologies)}
                        <Technologies technologies={item.technologies} />
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
