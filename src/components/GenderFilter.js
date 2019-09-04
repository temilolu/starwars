import React from 'react';

const GenderFilter = ({ gender }) => {
  //   const filterGender = gender.filter(
  //     types => types.gender.toLowerCase() === this.props.selectedMovieID.toLowerCase()
  //   );
  return (
    <React.Fragment>
      <select className="custom-select custom-select-lg mb-3">
        <option>All</option>
        <option>Male</option>
        <option>Female</option>
      </select>
    </React.Fragment>
  );
};

export default GenderFilter;
