// MaterialComponent.js
import React from 'react';

function MaterialComponent({ data, material, searchTerm }) {
  const filteredData =
    (data[material] || []).filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        item.material === material
    ) || [];

  return (
    <div>
      <h2>{material} Items:</h2>
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default MaterialComponent;
