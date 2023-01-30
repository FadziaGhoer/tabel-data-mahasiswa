import React, { useMemo } from "react";
import MOCK_DATA from "./MOCK_DATA.json";

export const FilteringData = () => {
  const data = useMemo(() => MOCK_DATA, []);
  return (
    <div>
      {data
        .filter(data => data.asal === 'Bandung')
        .map((filtereddata) => (
          <li key={data.id}>{filtereddata.nama}</li>
        ))}
    </div>
  );
};