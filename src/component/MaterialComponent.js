// MaterialComponent.js
import React from 'react';

/**
 * MaterialComponent displays a list of items based on a specified material and search term.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.data - The data object containing items categorized by material.
 * @param {string} props.material - The material to filter items.
 * @param {string} props.searchTerm - The search term to filter items by name.
 */
function MaterialComponent({ data, material, searchTerm }) {
  // Filtered data based on material and search term
  const filteredData =
    (data[material] || []).filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        item.material === material
    ) || [];

  return (
    <div>
      {/* Display the material heading */}
      <h2>{material} Items:</h2>
      {/* Display the filtered items in a list */}
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default MaterialComponent;
