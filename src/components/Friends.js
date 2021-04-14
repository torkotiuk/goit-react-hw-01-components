import React from 'react';
import PropTypes from 'prop-types';
import Friend from './Friend';

const styles = {
  outline: '1px solid green',
  display: 'inline-block',
};

const Friends = ({ friends }) => (
  <ul style={styles}>
    {friends.map(item => (
      <li key={item.id}>
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
