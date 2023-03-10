import PropTypes from 'prop-types';
import {
  Card,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  Quantity,
  Label,
} from 'components/Profile/profile.styled';

export const Profile = ({ avatar, username, tag, location, followers, likes, views }) => {
  return (
    <Card>
      <Description>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>
      <Stats>
        <li>
          <Label>Followers:</Label>
          <Quantity>{followers}</Quantity>
        </li>
        <li>
          <Label>Likes:</Label>
          <Quantity>{likes}</Quantity>
        </li>
        <li>
          <Label>Views:</Label>
          <Quantity>{views}</Quantity>
        </li>
      </Stats>
    </Card>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
};
