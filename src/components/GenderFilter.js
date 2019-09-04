import React from 'react';

const GenderFilter = ({ GenderSelect, selectGender }) => {
  return (
    <React.Fragment>
      <select
        className="custom-select custom-select-lg mb-3"
        onChange={GenderSelect}
        value={selectGender}
      >
        <option>All</option>
        <option value="male">male</option>
        <option value="female">female</option>
      </select>
    </React.Fragment>
  );
};

export default GenderFilter;
