import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <small>
        This project was coded by Madeline Santos. It is{" "}
        <a
          href="https://github.com/madtos12/dictionary-app"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://jolly-poincare-27490a.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
      </small>
    </div>
  );
}
