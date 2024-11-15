import React from "react";
import PropTypes from "prop-types";
import './table.css';

export default function Table({ columns, data, tableCaption }) {
  return (
    <div>
      {/* Accessible caption */}
      {tableCaption && (
        <caption style={{ textAlign: "left", marginBottom: "8px", fontWeight: "bold" }}>
          {tableCaption}
        </caption>
      )}

      {/* Table for desktop and larger screens */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th key={index} style={{ textAlign: column.isNumeric ? "right" : "left" }}>
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((column, colIndex) => (
                  <td
                    key={colIndex}
                    style={{
                      textAlign: column.isNumeric ? "right" : "left",
                    }}
                  >
                    {row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* List for mobile screens */}
      <div className="list-container">
        {data.map((row, rowIndex) => (
          <div key={rowIndex} className="list-item">
            {columns.map((column) => (
              <div key={column.key} className="list-item-row">
                <strong>{column.label}:</strong> {row[column.key]}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
      isNumeric: PropTypes.bool,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  tableCaption: PropTypes.string,
};
