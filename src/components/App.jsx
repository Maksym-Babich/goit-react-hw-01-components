import { Profile } from "components/Profile/profile";
import { Statistics } from "components/Statistics/Statistics";
import User from "data/user.json";
import data from "data/data.json";

export const App = () => {
  return (
    <>
    <Profile avatar={User.avatar} username={User.username}
      tag={User.tag} location={User.location}
      followers={User.stats.followers} views={User.stats.views}
        likes={User.stats.likes} />
      <Statistics title="Upload stats" stats={data} />
      </>
  );
};
