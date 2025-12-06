import React, { useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  const [isExtended, setIsExtended] = useState(false);

  function handleMenuClick() {
    setIsExtended(!isExtended);
  }

  return (
    <div className="sidebar">
      <div className="top">
        <img
          src={assets.menu_icon}
          alt="Menu Icon"
          className="menu"
          onClick={handleMenuClick}
        />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="Add Icon" />
          {isExtended && <p>New Chat</p>}
        </div>

        {isExtended && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <img src={assets.message_icon} alt="Message Icon" />
              <p>What is react ....</p>
            </div>
          </div>
        )}
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="Question Icon" />
          {isExtended && <p>Help</p>}
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="History Icon" />
          {isExtended && <p>Activity</p>}
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="Setting Icon" />
          {isExtended && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
