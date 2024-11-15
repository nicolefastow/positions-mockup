import React from "react";
import "./summary-total.css"; // Optional for styles

export default function SummaryTotal({ values }) {
  return (
    <div className="flex-container">
      {values.map((value, index) => (
        <div key={index} className="flex-box">
          {value}
        </div>
      ))}
    </div>
  );
};
