import React from "react";
import Links from "./Links";
function About(props) {
  return (
    <div id="about">

      <h2> About Me{props.bio}</h2>
      { props.bio && props.bio.length>0?<p>{props.bio}</p>:null  }  
          <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />

      <Links linkedin={props.links["linkedin"]}
       github={props.links["github"]}  /> 
           </div>
  );
}

export default About;
