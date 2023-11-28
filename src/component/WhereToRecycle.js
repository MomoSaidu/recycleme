import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

/**
 * Component that provides information on where to recycle different materials.
 */
const WhereToRecycle = () => {
  // Extract the 'material' parameter from the URL
  const { material } = useParams();

  // Recycling information for different materials
  const recyclingInfo = {
    Metal: `
      Common metals like aluminum and steel can often be recycled through curbside recycling programs.
      Scrap metal, such as appliances and electronics, may need to be taken to a specialized recycling facility or collection event.
    `,
    Cardboard: `
      Cardboard is typically accepted in curbside recycling bins.
      Recycling centers or drop-off locations may also accept cardboard.
    `,
    Plastic: `
      Many types of plastic can be recycled through curbside recycling programs.
      Look for the recycling symbol with a number inside to determine the type of plastic.
      Some communities may have specific guidelines on which plastics they accept.
    `,
    HazardousWaste: `
      Hazardous waste, such as batteries, paints, chemicals, and certain electronic devices, should be handled with care.
      Local household hazardous waste (HHW) collection events or facilities may accept these items.
      Check with your local waste management or environmental agency for guidance.
    `,
    IndustrialWaste: `
      Industrial waste is often managed by specialized facilities and should not be disposed of through regular household recycling.
      Industrial businesses are typically responsible for managing and recycling their own industrial waste.
    `,
    EWaste: `
      E-waste includes items like computers, smartphones, and other electronic devices.
      Many communities have specific e-waste recycling programs or collection events.
      Electronics retailers or manufacturers may offer recycling programs for their products.
    `,
  };

  // State for search term input
  const [searchTerm, setSearchTerm] = useState('');

  // Convert material to uppercase
  const formattedMaterial = material ? material.charAt(0).toUpperCase() + material.slice(1) : '';

  // Filter recycling info based on search term
  const filteredRecyclingInfo = Object.keys(recyclingInfo).reduce((result, key) => {
    if (key.toLowerCase().includes(searchTerm.toLowerCase())) {
      result[key] = recyclingInfo[key];
    }
    return result;
  }, {});

  return (
    <div className="where-to-recycle-container">
      {/* Heading for the Where to Recycle section */}
      <h1 className="where-to-recycle-heading">Where to Recycle</h1>

      {/* Search bar for filtering materials */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a material..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Display recycling information based on the selected material or filtered results */}
      {formattedMaterial && recyclingInfo[formattedMaterial] ? (
        <div className="recycling-info">
          <h2 className="selected-material-heading">{formattedMaterial}</h2>
          <p>{recyclingInfo[formattedMaterial]}</p>
          <div className="purple-line"></div>
        </div>
      ) : (
        <div>
          {/* Display filtered results or a message if no results match the search */}
          {Object.keys(filteredRecyclingInfo).length > 0 ? (
            Object.keys(filteredRecyclingInfo).map((key) => (
              <div key={key} className="recycling-info">
                <h2 className="selected-material-heading">{key}</h2>
                <p>{filteredRecyclingInfo[key]}</p>
                <div className="purple-line"></div>
              </div>
            ))
          ) : (
            <p>No matching results. Please refine your search.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default WhereToRecycle;
