import React from "react";
import "./style.css";
import trans from "../../trans";
import { useStore } from "../../Store";
import aboutSVG from "../../assets/aboutSVG.svg";
import AboutFooter from "../../component/About/Footer";

function AboutScreen() {
  const { lang } = useStore();
  return (
    <div className="about-screen">
      <div className="Todo-container">
        <div className="title">
          <h1>{trans[lang].nav_titleabout}</h1>
          <p>{trans[lang].nav_textabout}</p>
        </div>
        <div className="svg-todo">
          <img src={aboutSVG} />
        </div>
        <AboutFooter />
      </div>
    </div>
  );
}
export default AboutScreen;
