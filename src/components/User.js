import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  outline: '1px solid green',
  display: 'inline-block',
};

const User = ({ name, tag, location, avatar, followers, views, likes }) => (
  <div class="profile" style={styles}>
    <div class="description">
      <img src={avatar} alt={name} class="avatar" width="240" />
      <p class="name">{name}</p>
      <p class="tag">@{tag}</p>
      <p class="location">{location}</p>
    </div>

    <ul class="stats">
      <li>
        <span class="label">Followers: </span>
        <span class="quantity">{followers}</span>
      </li>
      <li>
        <span class="label">Views: </span>
        <span class="quantity">{views}</span>
      </li>
      <li>
        <span class="label">Likes: </span>
        <span class="quantity">{likes}</span>
      </li>
    </ul>
  </div>
);

export default User;
