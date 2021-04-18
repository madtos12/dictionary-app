import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <small>
        Coded by Madeline Santos. It is open-sourced on{" "}
        <a
          href="https://github.com/madtos12/dictionary-app"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          GitHub
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://jolly-poincare-27490a.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify.
        </a>
      </small>
    </div>
  );
}
