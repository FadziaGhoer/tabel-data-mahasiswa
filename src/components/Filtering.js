import React, { useState } from "react";

function Filtering (data) {
  const [query, setQuery] = useState("");

  console.log(data.filter(data=>data.nama.includes("fa")));
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        className="search-box"
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default Filtering;
