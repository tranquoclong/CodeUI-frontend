import React from "react";
import { Link } from "react-router-dom";
import top from "../../assets/fonts/top-post-badge.svg";
function Footer() {
  return (
    <footer className="footer">
      <div className="content">
        <div className="left">
          <Link className="logo-wrapper" to="/">
            <img
              className="logo"
              src="../../assets/images/apple-touch-icon.fng"
              alt=""
            />
          </Link>
          <p className="description">
            Universe of UI; Hundreds of Open Source UI elements
          </p>
          <Link className="link" to="/terms-and-conditions">
            Terms and conditions
          </Link>
          <p className="license">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="none" d="M0 0H24V24H0z" />
              <path
                fill="currentColor"
                d="M13 2v1.278l5 1.668 3.632-1.21.633 1.896-3.032 1.011 3.096 8.512C21.237 16.292 19.7 17 18 17c-1.701 0-3.237-.708-4.329-1.845l3.094-8.512L13 5.387V19H17v2H7v-2h4V5.387L7.232 6.643l3.096 8.512C9.237 16.292 7.7 17 6 17c-1.701 0-3.237-.708-4.329-1.845l3.094-8.512-3.03-1.01.633-1.898L6 4.945l5-1.667V2h2zm5 7.103l-1.958 5.386c.587.331 1.257.511 1.958.511.7 0 1.37-.18 1.958-.51L18 9.102zm-12 0l-1.958 5.386C4.629 14.82 5.299 15 6 15c.7 0 1.37-.18 1.958-.51L6 9.102z"
              />
            </svg>
            MIT License
          </p>
          <p className="license-sub">
            All content (UI elements) on this site are published under the MIT
            License <b>(Free for personal and commercial use)</b>
          </p>
        </div>
        <Link
          to="https://www.producthunt.com/posts/uiverse-io?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-uiverse-io"
          target="_blank"
          rel="noreferrer"
          className="product-hunt"
        >
          <img
            src={top}
            alt="uiverse.io - Hundreds of open source UI elements | Product Hunt"
            width={250}
            height={54}
          />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;