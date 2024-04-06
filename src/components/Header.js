// components/Header.js
import React from 'react';

const Header = () => {
  const headerStyle = {
    textAlign: 'center',
    color: '#000000', // Text color
    backgroundColor: '#FFFF00', // Background color
    padding: '20px', // Padding around the content
    borderRadius: '10px' // Border radius
  };

  return (
    <div className="header" style={headerStyle}>
      <h1>Gradebook Project</h1>
      {/* Add more header information as needed */}
    </div>
  );
};

export default Header;
