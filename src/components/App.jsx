import { Profile } from "components/Profile/profile";
import User from "data/user.json";
console.log(User);
export const App = () => {
  return (
    <Profile avatar={User.avatar} username={User.username}
      tag={User.tag} location={User.location}
      followers={User.stats.followers} views={User.stats.views}
      likes={User.stats.likes} />
  );
};
