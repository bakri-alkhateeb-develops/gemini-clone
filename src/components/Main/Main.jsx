import React from "react";
import { assets } from "../../assets/assets";
import "./Main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="user-icon" />
      </div>

      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, Beek.</span>
          </p>
          <p>How can I help you today?</p>
        </div>

        <div className="cards">
          <div className="card">
            <p>
              Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum
              dolor sit amet.Lorem ipsum dolor sit amet.
            </p>
            <img src={assets.compass_icon} alt="compass-icon" />
          </div>
          <div className="card">
            <p>
              Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum
              dolor sit amet.Lorem ipsum dolor sit amet.
            </p>
            <img src={assets.bulb_icon} alt="bulb-icon" />
          </div>
          <div className="card">
            <p>
              Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum
              dolor sit amet.Lorem ipsum dolor sit amet.
            </p>
            <img src={assets.message_icon} alt="message-icon" />
          </div>
          <div className="card">
            <p>
              Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum
              dolor sit amet.Lorem ipsum dolor sit amet.
            </p>
            <img src={assets.code_icon} alt="code-icon" />
          </div>
        </div>

        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Enter a prompt here" />
            <div>
              <img src={assets.gallery_icon} alt="gallery" />
              <img src={assets.mic_icon} alt="mic" />
              <img src={assets.send_icon} alt="send" />
            </div>
          </div>

          <p className="bottom-info">
            Gemini may display inaccurate or offensive information that does not
            represent Google’s views. Learn more
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
