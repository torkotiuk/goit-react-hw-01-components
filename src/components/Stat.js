import React from 'react';
import PropTypes from 'prop-types';

const Stat = ({ label, percentage }) => (
  <div>
    <span class="label">{label}</span>
    <span class="percentage">{percentage}</span>
  </div>
);

Stat.propTypes = {
  // id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Stat;
