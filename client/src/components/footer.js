import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <h4>UEFA Champions League</h4>
          <p>a web app project</p>
          <small>
            Content & data from <a href="uefa.com">uefa,</a>{" "}
            <a href="https://www.football-data.org/">
              football-data.org, and mock data
            </a>
          </small>
          .
        </div>
      </div>
    </footer>
  );
};

export default Footer;
