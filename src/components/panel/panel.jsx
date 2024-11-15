import React, { useState } from "react";
import PropTypes from "prop-types";
import './panel.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Panel = ({ title, children, collapsible = false }) => {
  const [isExpanded, setIsExpanded] = useState(!collapsible);

  // Toggle the panel state
  const togglePanel = () => {
    if (collapsible) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div className="panel">
      <div
        className={`panel-title ${collapsible ? "panel--collapsible" : "panel--not-collapsible"}`}
        onClick={togglePanel}
      >
        <h3 style={{ margin: 0 }}>{title}</h3>
        {collapsible && (
            isExpanded ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />
        )}
      </div>
      {isExpanded && <div style={{ marginTop: "16px" }}>{children}</div>}
    </div>
  );
};

Panel.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  collapsible: PropTypes.bool,
};

export default Panel;
