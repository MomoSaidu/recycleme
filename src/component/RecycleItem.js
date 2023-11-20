import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';

const RecycleItem = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showItemList, setShowItemList] = useState(false);
  const [suggestedItems, setSuggestedItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api.json');

        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }

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
    setShowItemList(false);
    setSuggestedItems(filtered.map((item) => ({ value: item.name, label: item.name })));
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);

    // Filter items based on the search term
    const filtered = suggestedItems.filter((item) =>
      item.label.toLowerCase().includes(value.toLowerCase())
    );

    // Update filtered items and showItemList state
    setFilteredItems(filtered);
    setShowItemList(value.length > 0); // Show suggestions only if the search term is not empty
  };

  return (
    <div className="recycle-container">
      <h1 className="recycle-heading">Select Material to search:</h1>

      {loading && <p>Loading...</p>}
      {error && <p className="error-message">{error}</p>}

      {!loading && !error && (
        <div>
          {selectedMaterial && (
            <div className="selected-material-container">
              <h2 className="selected-material-heading">
               {selectedMaterial}
              </h2>
            </div>
          )}

          <div className="material-buttons">
            {Object.keys(items).map((material) => (
              <button
                key={material}
                onClick={() => filterByMaterial(material)}
                className="material-button"
              >
                {material}
              </button>
            ))}
          </div>

          {/* Search box for items */}
          <div className="search-bar-container">
            <Select
              options={suggestedItems}
              value={{ value: searchTerm, label: searchTerm }}
              onChange={(selectedOption) => handleSearchChange(selectedOption.value)}
              placeholder="Search for an item..."
            />
          </div>

          {selectedMaterial && showItemList && (
            <div className="selected-material-container">
              <ul className="item-list">
                {filteredItems.map((name, index) => (
                  <li key={index} className="item-name">
                    <Link to="/where-to-recycle" className="location-link">
                      {name.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Image container */}
          <div className="image-container">
            <img src="/RecycleItemImage.jpg" alt="Background Image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default RecycleItem;
