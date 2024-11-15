import React from "react";
import Timestamp from "../timestamp/timestamp"
import './page-header.css';

export default function PageHeader({pageTitle}) {
    return (
      <div className="page-header">
        <h1>{pageTitle}</h1>
        <Timestamp></Timestamp>
      </div>
    )
  }