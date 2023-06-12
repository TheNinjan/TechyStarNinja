import React from "react";
import "../styles/Footer.scss"

const Footer = () => {
  return (
    <footer>
      <div>
        <h1>TechyStar</h1>
        <p>@all right reserved</p>
      </div>

      <div>
        <h5>Follow Us</h5>
        <div>
          <a href="https://youtube.com/theninjan/" target={"blank"}>
            Youtube
          </a>
          <a href="https://instagram.com/theninjan/" target={"blank"}>
            Instagram
          </a>
          <a href="https://github.com/TheNinjan/" target={"blank"}>
            Github
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;