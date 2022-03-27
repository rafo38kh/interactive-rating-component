import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="text-primaryLight text-[0.5rem] mb-2">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          className="text-tertiary underline uppercase hover:text-white"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://github.com/rafo38kh"
          target="_blank"
          className="text-tertiary underline uppercase hover:text-white"
        >
          rafo38kh
        </a>
        .
      </footer>
    );
  }
}

export default Footer;
