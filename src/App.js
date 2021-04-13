import React from 'react';
import User from './components/User';
import userData from './JSON/user.json';

const App = () => (
  <User
    name={userData.name}
    tag={userData.tag}
    location={userData.location}
    avatar={userData.avatar}
    alt={userData.name}
    followers={userData.stats.followers}
    viewers={userData.stats.viewers}
    likes={userData.stats.likes}
  />
);

export default App;
