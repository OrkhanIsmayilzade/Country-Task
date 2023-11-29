import React, { useState } from 'react';

const Search = ({ darkMode}) => {
 

  

  return (
    <div className={`searchDiv ${darkMode ? 'dark-mode' : ''}`}>
      <input
        type="text"
        placeholder="Search for country..."
        className="input"
        
        
      />
    </div>
  );
};

export default Search;
