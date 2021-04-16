import defaultImage from './default-image.jpg';

import PropTypes from 'prop-types';

import styles from './Friends.module.css';

const Friend = ({ isOnline, avatar, name, id }) => (
  <div className={styles.Friend__item}>
    <span
      className={isOnline ? styles.Friend__online : styles.Friend__offline}
    ></span>
    <img className="avatar" src={avatar} alt={name} width="48" />
    <p className={styles.Friend__name}>{name}</p>
  </div>
);

Friend.defaultProps = {
  avatar: defaultImage,
  id: '99',
};

Friend.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
};

export default Friend;
