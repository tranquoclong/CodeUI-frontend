import React from "react";
import { Link } from "react-router-dom";
function Sidebar({ history }) {
  const isActive = (history, path) => {
    if (history === path) return "active";
    else return "false";
  };

  return (
    <div className="navigation-section">
      <div className="sticky-wrapper">
        <nav className="navigation-categories">
          <Link
            className={`tab tab--all ${isActive(history, "/all")}`}
            to="/all"
          >
            <div className="tab-content">All</div>
          </Link>
          <Link
            className={`tab tab--button ${isActive(history, "/button")}`}
            to="/button"
          >
            <div className="tab-content">Buttons</div>
          </Link>
          <Link
            className={`tab tab--checkbox ${isActive(history, "/checkbox")}`}
            to="/checkbox"
          >
            <div className="tab-content">Checkboxes</div>
          </Link>
          <Link
            className={`tab tab--switch ${isActive(history, "/switch")}`}
            to="/switch"
          >
            <div className="tab-content">Toggle switches</div>
          </Link>
          <Link
            className={`tab tab--card ${isActive(history, "/card")}`}
            to="/card"
          >
            <div className="tab-content">Cards</div>
          </Link>
          <Link
            className={`tab tab--spinner ${isActive(history, "/spinner")}`}
            to="/spinner"
          >
            <div className="tab-content">Loaders</div>
          </Link>
          <Link
            className={`tab tab--input ${isActive(history, "/input")}`}
            to="/input"
          >
            <div className="tab-content">Inputs</div>
          </Link>
          <Link
            className={`tab tab--favorites ${isActive(history, "/favorites")}`}
            to="/favorites"
          >
            <div className="tab-content">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  fill="currentColor"
                  d="M5 2h14a1 1 0 0 1 1 1v19.143a.5.5 0 0 1-.766.424L12 18.03l-7.234 4.536A.5.5 0 0 1 4 22.143V3a1 1 0 0 1 1-1zm13 2H6v15.432l6-3.761 6 3.761V4z"
                />
              </svg>
              My favorites
            </div>
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
