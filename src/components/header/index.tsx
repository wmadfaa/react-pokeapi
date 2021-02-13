import React from "react";
import "./styles.scss";

export const Header: React.VFC = () => (
  <div className="header">
    <div className="header-container">
      <div className="header-developer-section">
        <p className="header-developer-section-subtitle">Developed by</p>
        <h3 className="header-developer-section-title">Wasim Almadfaa</h3>
      </div>
      <div className="header-actions-section">
        <a href="https://github.com/wmadfaa" className="header-action">
          <span>Github/wmadfaa</span>
        </a>
      </div>
    </div>
  </div>
);
