// JobSearchForm.js
import React, { useState } from 'react';

function JobSearchForm({ onSearch, onReset }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleReset = () => {
    setSearchTerm('');
    onReset();
  };

  return (
    <div className="job-search-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search jobs..."
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
    </div>
  );
}

export default JobSearchForm;
