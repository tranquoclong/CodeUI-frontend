import React from "react";
import thumnailcode from "../../../../assets/images/thumnailcode.png";
import htmlIcon from "../../../../assets/images/html.svg";
import cssIcon from "../../../../assets/images/css.svg";
import jsIcon from "../../../../assets/images/js.png";
import { Link } from 'react-router-dom';
function Hero() {
  const slogan = "The world most creative coding community";
  return (
    <div className="home-page_hero">
      <div className="home-page__hero">
        <div className="left">
          <h1 className="home-page__heading" style={{ maxWidth: "100%" }}>
            <span>CodeUI</span> :{" "}
            {slogan
              .split("")
              .map((character) =>
                character === " " ? " " : <strong>{character}</strong>
              )}
          </h1>
          <h2 className="home-page__subheading">
            <span className="boxText boxTextRed">
              where code comes to life{" "}
            </span>
            and
            <span className="boxText boxTextPurple">
              {" "}
              creativity takes flight
            </span>
          </h2>
          <div style={{ display: "flex" }}>
            <Link className="button cta-button" to="/elements/all">
              Browse all elements
            </Link>
            <img
              src={htmlIcon}
              alt="htmlIcon"
              style={{ height: "10%", width: "10%", marginTop: "15px" }}
            />
            <img
              src={cssIcon}
              alt="cssIcon"
              style={{ height: "10%", width: "10%", marginTop: "15px" }}
            />
            <img
              src={jsIcon}
              alt="cssIcon"
              style={{ height: "10%", width: "10%", marginTop: "15px" }}
            />
          </div>
        </div>
        <img src={thumnailcode} alt="thumnailcode" />
      </div>
    </div>
  );
}

export default Hero;
