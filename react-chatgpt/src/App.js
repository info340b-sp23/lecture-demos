// App.js
import React, { useState, useEffect } from 'react';
import JobSearchForm from './JobSearchForm';
import JobList from './JobList';
import './App.css';

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      
      const response = await fetch('./jobsData.json'); // Path to your local JSON file
      const data = await response.json();
      console.log(data)
      setJobs(data);
    } catch (error) {
      console.log('Error fetching job data:', error);
    }
  };

  const handleSearch = (searchTerm) => {
    const filteredJobs = jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setJobs(filteredJobs);
  };

  return (
    <div className="app">
      <h1>Job Search</h1>
      <JobSearchForm onSearch={handleSearch} />
      <JobList jobs={jobs} />
    </div>
  );
}

export default App;
