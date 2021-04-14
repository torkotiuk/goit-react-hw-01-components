import React from 'react';
import PropTypes from 'prop-types';

const Friend = ({ isOnline, avatar, name, id }) => (
  <div>
    <span>{isOnline ? 'On' : 'Off'}</span>
    <img class="avatar" src={avatar} alt={name} width="48" />
    <p class="name">{name}</p>
  </div>
);

export default Friend;
