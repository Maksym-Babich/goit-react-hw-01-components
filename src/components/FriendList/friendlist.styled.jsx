import styled from '@emotion/styled';

export const ListOfFriends = styled.ul`
list-style: none;
margin: 0;
padding: 0;
width: 150px;
margin: 0 auto 50px;
`;

export const FriendListItem = styled.li`
display: flex;
align-items: center;
padding: 5px;
border: 1px solid black;
background-color: #ffffff;
:not(:last-of-type) {
    margin-bottom: 10px;
}
`;

export const FriendStatus = styled.span`
width: 15px;
height: 15px;
border-radius: 50%;
margin-right: 10px;
`;

export const FriendAvatar = styled.img`
margin-right: 10px;
`;

export const FriendName = styled.p``;

