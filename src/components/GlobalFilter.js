import React from "react";
import './table.css'

export const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <span className="search-box">
      <input placeholder="Search..." value={filter || ""} onChange={(e) => setFilter(e.target.value)} />
    </span>
  );
};
