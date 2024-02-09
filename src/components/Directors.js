import React from 'react';
import directorsData from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directorsData.map((director) => (
        <div key={director.id}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Directors;