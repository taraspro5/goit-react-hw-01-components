import { Profile } from "./Profile/Profile.jsx";
import { Statistics } from "./Statistics/Statistics.jsx";
import { FriendList } from "./FriendList/FriendList.jsx";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory.jsx";
import user from '../users/user.json'
import data from '../statistics/data.json'
import friends from '../friends/friends.json'
import transactions from '../transactions/transactions.json'

export const App = () => {
  return (
<>
    {/* Task 1 */}
    <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
    />
    {/* Task 2 */}
    <Statistics title="Upload stats" stats={data} />
    <Statistics stats={data} />
    {/* Task 3 */}
    <FriendList friends={friends} />
    {/* Task 4 */}
    <TransactionHistory items={transactions} />
</>
  );
};
