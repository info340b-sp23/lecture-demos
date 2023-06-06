// JobList.js
import React from 'react';

function JobList({ jobs }) {
  return (
    <div className="job-list">
      <h2>Job Listings</h2>
      {jobs.length === 0 ? (
        <p>No jobs found.</p>
      ) : (
        <div className="card-container">
          {jobs.map((job) => (
            <div key={job.id} className="card">
              <h3>{job.title}</h3>
              <p className="company">{job.company}</p>
              <p className="location">{job.location}</p>
              <p>{job.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default JobList;
