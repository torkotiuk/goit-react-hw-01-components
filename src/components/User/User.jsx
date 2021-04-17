import defaultImage from './default-image.jpg';
import PropTypes from 'prop-types';
import styles from './User.module.css';

const User = ({ name, tag, location, avatar, followers, views, likes }) => (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img src={avatar} alt={name} className={styles.avatar} width="130" />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>

    <ul className={styles.stats}>
      <li className={styles.stats__item}>
        <span className={styles.label}>Followers: </span>
        <span className={styles.quantity}>{followers}</span>
      </li>
      <li className={styles.stats__item}>
        <span className={styles.label}>Views: </span>
        <span className={styles.quantity}>{views}</span>
      </li>
      <li className={styles.stats__item}>
        <span className={styles.label}>Likes: </span>
        <span className={styles.quantity}>{likes}</span>
      </li>
    </ul>
  </div>
);

User.defaultProps = {
  avatar: defaultImage,
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default User;
