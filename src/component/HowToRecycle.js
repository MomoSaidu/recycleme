import React, { useState, useEffect } from 'react';

function HowToRecycle() {
  const [items, setItems] = useState([]);

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

  return (
    <div>
      <h1>How to Recycle</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <strong>{item.name}</strong> - Material: {item.material}, Value: {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HowToRecycle;
