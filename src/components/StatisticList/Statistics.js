import PropTypes from 'prop-types';
import Stat from './Stat';

import styles from './Statistics.module.css';

const setBg = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
};

const Statistics = ({ title, items }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.statistics_title}>{title}</h2>}

    <ul className={styles.statistics__list}>
      {items.map(item => (
        <li
          key={item.id}
          className={styles.statistics__listItem}
          style={{ backgroundColor: `#${setBg()}` }}
        >
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
