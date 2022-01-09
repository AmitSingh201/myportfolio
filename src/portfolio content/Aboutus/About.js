import React from "react";
import "./About.css";
// import My from '../../assets/Home/about.jpg'
import Img from '../../assets/Home/IMG_20211018_153543 (2).jpg';

export default function About() {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card">
          <img
            src={Img}
            alt=""
            className="about-img"
          />
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-title">About Me</h1>
        <p className="about-sub">
          Its a long established fact that a render will be about me
        </p>
        <p className="about-desc"> this p is contain a info about the user

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          aspernatur? Ipsa, facilis? Obcaecati doloremque repellat est ratione
          id ipsam expedita, veniam laudantium odit porro reiciendis iste dolore
          odio rerum quas?
        </p>
        <div className="about-award">
            <img src="" alt="" className="about-award-img" />
        </div>
      </div>
    </div>
  );
}
