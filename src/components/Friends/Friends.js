import Friend from './Friend';

import styles from './Friends.module.css';

const Friends = ({ friends }) => (
  <ul className={styles.Friends__container}>
    {friends.map(item => (
      <li className={styles.Friend__li} key={item.id}>
        <Friend
          isOnline={item.isOnline}
          avatar={item.avatar}
          name={item.name}
        />
      </li>
    ))}
  </ul>
);

export default Friends;
