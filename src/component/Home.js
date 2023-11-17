import React from 'react';
import recyclingImage from '/Users/THINKPAD/recycleme/src/recycling.jpg'; // adjust the path as needed

function Home() {
  return (
    <div>
      <h1>Welcome to RecycleNow</h1>
      <img src={recyclingImage} alt="Recycling" style={{width: "50%", height: "auto"}}/>
      <p>Recycling is a key part of reducing global carbon emissions and it is widely used by many people across the world. It involves turning waste materials into reusable material to prevent waste of potentially useful materials, reduce the consumption of fresh raw materials, and lower greenhouse gas emissions.</p>
      <p>Recycling is a great way to help protect our planet. By recycling, we reduce the need to destroy habitats for animals. It also reduces the amount of raw materials that we need from the earth. This helps to preserve natural resources, making it an environmentally friendly solution.</p>
      <p>Recycling not only saves energy but also reduces air pollution and greenhouse gases that are caused by waste in landfill and the manufacturing of new products. So, let's recycle now for a better future!</p>
    </div>
  );
}

export default Home;
