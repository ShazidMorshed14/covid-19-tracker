import numeral from "numeral";
import React from "react";
import "./Table.css";
const Table = ({ countries }) => {
  return (
    <div className="table">
      {countries.map((c) => {
        const { country, cases } = c;
        return (
          <tr>
            <td>{country}</td>
            <td>
              <strong>{numeral(cases).format("0,0")}</strong>
            </td>
          </tr>
        );
      })}
    </div>
  );
};

export default Table;