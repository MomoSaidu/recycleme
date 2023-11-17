// News.js
import React, { useState, useEffect } from 'react';

function News() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/home/darragh/Github/recycleme/src/api.json');
        const data = await response.json();
        console.log('Data loaded:', data);
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Function to filter and map items based on the material key
  const filterAndMapItems = (material) => {
    return items[material] ? items[material].map((item, index) => (
      <li key={index}>
        <strong>Name:</strong> {item.name}, <strong>Material:</strong> {item.material}
      </li>
    )) : [];
  };

  console.log('Items:', items);

  return (
    <div>
      <h1>News</h1>
      <p>Latest news and updates.</p>

      {/* Display information for each key separately */}
      <h2>Metal Items:</h2>
      <ul>
        {filterAndMapItems('Metal')}
      </ul>

      <h2>Cardboard Items:</h2>
      <ul>
        {filterAndMapItems('Cardboard')}
      </ul>

      <h2>Plastic Items:</h2>
      <ul>
        {filterAndMapItems('Plastic')}
      </ul>
    </div>
  );
}

export default News;
