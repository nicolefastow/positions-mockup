import React, { useState, useEffect } from "react";
import './timestamp.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateRight, faPrint } from "@fortawesome/free-solid-svg-icons";

const Timestamp = () => {
  const [time, setTime] = useState("");

  // Function to get the current time and date in EST
  const getCurrentTimeInEST = () => {
    const now = new Date();
    const options = {
      timeZone: "America/New_York",
      timeZoneName: "short",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    const formatter = new Intl.DateTimeFormat("en-US", options);
    return formatter.format(now);
  };

  // Set the initial time on component mount
  useEffect(() => {
    setTime(getCurrentTimeInEST());
  }, []);

  const refreshTime = () => {
    setTime(getCurrentTimeInEST());
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="toolbar">
      <p className="timestamp__text">Updated: {time}</p>
      <button className="button timestamp__button" onClick={refreshTime}><FontAwesomeIcon icon={faArrowRotateRight} className="icon--padding-right"/> Refresh</button>
      <button className="button timestamp__button" onClick={handlePrint}><FontAwesomeIcon icon={faPrint}className="icon--padding-right"/>Print</button>
    </div>
  );
};

export default Timestamp;
