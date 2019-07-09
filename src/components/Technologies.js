import React from "react";

const Technologies = props => (
  <div className="technologies-buttons">
    {console.log("props in tecnho is", props.technologies)}
    {props ? (
      props.technologies.map((skill, key) => (
        <button className="tech-skill" key={key}>
          {skill}
        </button>
      ))
    ) : (
      <span> loading </span>
    )}
  </div>
);

export default Technologies;
