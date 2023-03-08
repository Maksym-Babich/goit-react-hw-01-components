import { Profile } from 'components/Profile/profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/friendlist';
import { TransactionHistory } from 'components/TransactionHistory/transactionhistory';
import User from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

//added code formatting

export const App = () => {
  return (
    <>
      <Profile
        avatar={User.avatar}
        username={User.username}
        tag={User.tag}
        location={User.location}
        followers={User.stats.followers}
        views={User.stats.views}
        likes={User.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
