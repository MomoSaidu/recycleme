import React from 'react';
import recyclingImage from '../images/recycling.jpg';

/**
 * Home component displaying information about RecycleNow and the importance of recycling.
 */
function Home() {
  // Style for the main image to ensure consistency and aesthetics
  const imageStyle = {
    width: '50%', // Set the width to 50% of the original size
    height: '50%', // Set the height to 50% of the original size
    marginBottom: '10px', // Add margin to the bottom for visual spacing
  };

  return (
    <div className="home-container">
      <div className="home-content">
        {/* Purple line for visual separation */}
        <div className="purple-line"></div>

        {/* Title with increased font size and green color */}
        <h1 className="home-title" style={{ color: '#4caf50', fontSize: '2.5rem' }}>
          Welcome to RecycleNow
        </h1>

        {/* Description paragraphs explaining the importance of recycling */}
        <p className="home-description">
          Recycling is a key part of reducing global carbon emissions and is widely practiced
          worldwide. It involves turning waste materials into reusable material to prevent
          waste of potentially useful materials, reduce the consumption of fresh raw materials,
          and lower greenhouse gas emissions.
        </p>
        <p className="home-description">
          Recycling is a great way to help protect our planet. By recycling, we reduce the need
          to destroy habitats for animals and preserve natural resources, making it an
          environmentally friendly solution.
        </p>
        <p className="home-description">
          Recycling not only saves energy but also reduces air pollution and greenhouse gases
          caused by waste in landfills and the manufacturing of new products. So, let's recycle
          now for a better future!
        </p>
        <p className="home-description">
          Welcome to our RecycleNow community! Here, we share valuable information about
          recycling, sustainable living, and environmental conservation. Join us in the journey
          to make our planet a cleaner and greener place for generations to come.
        </p>
        <p className="home-description">
          Explore our resources, learn about different materials, and discover convenient
          recycling locations near you. Together, we can make a positive impact on the
          environment. Thank you for choosing to recycle now!
        </p>

        {/* Purple line for visual separation */}
        <div className="purple-line"></div>
      </div>

      {/* Container for the main image */}
      <div className="home-image-container">
        <img src={recyclingImage} alt="Recycling" style={imageStyle} />
      </div>
    </div>
  );
}

export default Home;
