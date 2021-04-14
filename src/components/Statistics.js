import React from 'react';
import PropTypes from 'prop-types';
import Stat from './Stat';

let randomColor = Math.floor(Math.random() * 16777215).toString(16);
const styles = {
  backgroundColor: `#${randomColor}`,
};
const stylesStat = {
  outline: '2px solid grey',
  display: 'inline-block',
};

const Statistics = ({ title, items }) => (
  <section class="statistics" style={stylesStat}>
    {title && <h2 class="title">{title}</h2>}

    <ul class="stat-list">
      {items.map(item => (
        <li key={item.id} class="item" style={styles}>
          <Stat label={item.label} percentage={item.percentage} />
        </li>
      ))}
    </ul>
  </section>
);

Statistics.defaultProps = {
  title: PropTypes.string,
};

export default Statistics;
