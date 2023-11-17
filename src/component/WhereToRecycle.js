import React, { useState, useEffect } from 'react';

const materialLocationMap = {
  Plastic: 'Bottle Bank',
  Metal: 'Scrapyard',
  Cardboard: 'Green Bin',
};

function WhereToRecycle() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedMaterial, setSelectedMaterial] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api.json'); // Adjust the path as needed
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const filterByMaterial = (material) => {
    const filtered = items.filter((item) => item.material === material);
    setFilteredItems(filtered);
    setSelectedMaterial(material);
  };

  const getNames = () => filteredItems.map((item) => item.name);

  const getLocation = () => materialLocationMap[selectedMaterial];

  return (
    <div>
      <h1>Material Search</h1>
      <button onClick={() => filterByMaterial('Plastic')}>Search Plastic</button>
      <button onClick={() => filterByMaterial('Metal')}>Search Metal</button>
      <button onClick={() => filterByMaterial('Cardboard')}>Search Cardboard</button>

      {selectedMaterial && (
        <div>
          <h2>{selectedMaterial} Items:</h2>
          <ul>
            {getNames().map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
          <p>Location: {getLocation()}</p>
        </div>
      )}
    </div>
  );
}

export default WhereToRecycle;
