// components
import User from './components/User/index';
import Statistics from './components/StatisticList/Statistics';
import Friends from './components/Friends/Friends';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

// JSON-s
import userData from './JSON/user.json';
import stats from './JSON/statistical-data.json';
import friends from './JSON/friends.json';
import transactions from './JSON/transactions.json';

const App = () => (
  <div>
    <User
      name={userData.name}
      tag={userData.tag}
      location={userData.location}
      avatar={userData.avatar}
      alt={userData.name}
      followers={userData.stats.followers}
      views={userData.stats.views}
      likes={userData.stats.likes}
    />

    <Statistics title="Upload stats" items={stats} />

    <Friends friends={friends} />

    <TransactionHistory items={transactions} />
  </div>
);

export default App;
