import React from 'react';
import CharaterTable from './CharacterTable';

const MovieDetails = ({ details }) => {
  if (!details) {
    return (
      <div className="card-group">
        <div className="card">
          <div className="py-5">
            <p>No selected movie</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <React.Fragment>
      <div className="card-group">
        <div className="card text-left">
          <div className="p-4">
            <h3>{details.title}</h3>
            <marquee className="text-warning">{details.opening_crawl}</marquee>
            <CharaterTable data={details.characters} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MovieDetails;
