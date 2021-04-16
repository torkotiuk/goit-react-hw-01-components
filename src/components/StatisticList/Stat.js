import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Stat = ({ label, percentage }) => (
  <>
    <span className={styles.statistics__span}>{label}</span>
    <span className={styles.statistics__span}>{percentage} %</span>
  </>
);

Stat.propTypes = {
  // id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Stat;
