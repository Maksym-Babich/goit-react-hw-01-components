import PropTypes from 'prop-types';
import {
  ListOfFriends,
  FriendListItem,
  FriendStatus,
  FriendAvatar,
  FriendName,
} from 'components/FriendList/friendlist.styled';

export const FriendList = ({ friends }) => {
  return (
    <ListOfFriends>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendListItem key={id}>
            <FriendStatus style={isOnline ? { backgroundColor: 'green' } : { backgroundColor: 'red' }}></FriendStatus>
            <FriendAvatar src={avatar} alt={name} width="48" />
            <FriendName>{name}</FriendName>
          </FriendListItem>
        );
      })}
    </ListOfFriends>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
