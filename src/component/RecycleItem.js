import React, { useState, useEffect } from 'react';

function RecycleItem() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api.json'); // Use the correct path
        console.log(response); // Log the response to inspect it

        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }

        // Check if the 'Content-Type' is 'application/json'
        const contentType = response.headers.get('Content-Type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error(`Invalid content type: ${contentType}`);
        }

        const data = await response.json();
        setItems(data);
        setLoading(false);
      } catch (error) {
        setError(`Error fetching data: ${error.message}`);
        setLoading(false);
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const filterByMaterial = (material) => {
    const filtered = items[material] || [];
    setFilteredItems(filtered);
    setSelectedMaterial(material);
  };

  const getNames = () => filteredItems.map((item) => item.name);

  const getLocation = () => {
    if (selectedMaterial && items[selectedMaterial]) {
      return items[selectedMaterial][0]?.location || 'Unknown Location';
    }
    return 'Unknown Location';
  };

  return (
    <div>
      <h1>Material Search</h1>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {!loading && !error && (
        <div>
          {Object.keys(items).map((material) => (
            <button key={material} onClick={() => filterByMaterial(material)}>
              Search {material}
            </button>
          ))}

          {selectedMaterial && (
            <div>
              <h2>{selectedMaterial} Items:</h2>
              <ul>
                {getNames().map((name, index) => (
                  <li key={index}>{name}</li>
                ))}
              </ul>
              <p>Location: {getLocation()}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default RecycleItem;
