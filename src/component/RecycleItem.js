import React, { useState, useEffect } from 'react';

function RecycleItem() {
  const [allData, setAllData] = useState([]);  // New state variable to store all data
  const [filteredData, setFilteredData] = useState([]);
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch('/home/darragh/Github/recycleme/src/api.json');
      const data = await response.json();
      console.log('Data loaded:', data);
      setAllData(data);  // Store all data in the new state variable
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filterByMaterial = (material) => {
    const filtered = allData[material] || [];  // Use allData instead of items
    const filteredWithSearchTerm = filtered.filter(
      (item) => item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredWithSearchTerm);
    setSelectedMaterial(material);
    console.log(`Filtered ${material} items:`, filteredWithSearchTerm);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h1>Material Search</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button onClick={() => filterByMaterial('Plastic')}>Search Plastic</button>
      <button onClick={() => filterByMaterial('Metal')}>Search Metal</button>
      <button onClick={() => filterByMaterial('Cardboard')}>Search Cardboard</button>

      {selectedMaterial && (
        <div>
          <h2>{selectedMaterial} Items:</h2>
          <ul>
            {filteredData.map((item, index) => (
              <li key={index}>
                <strong>Name:</strong> {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default RecycleItem;
