import React, { useState, useEffect } from 'react';

const materialLocationMap = {
  Plastic: 'Bottle Bank',
  Metal: 'Scrapyard',
  Cardboard: 'Green Bin',
};

function WhereToRecycle() {
  const [items, setItems] = useState([]);
  const [selectedMaterial, setSelectedMaterial] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api.json');
        const data = await response.json();

        if (Array.isArray(data)) {
          setItems(data);
        } else if (data && data.items && Array.isArray(data.items)) {
          setItems(data.items);
        } else {
          console.error('Fetched data is not in the expected format:', data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const filterByMaterial = (material) => {
    if (!Array.isArray(items)) {
      console.error('Items is not an array:', items);
      return;
    }

    const filtered = items.filter((item) => item.material === material);
    setSelectedMaterial(material);
    setItems(filtered); // Update the state with the filtered items
  };

  const getNames = () => items.map((item) => item.name);

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
