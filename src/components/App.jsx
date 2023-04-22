import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';

import user from './Profile/user.json';
import data from './Statistics/data.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
    </>
  );
};
