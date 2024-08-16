import { Box } from '@mui/material';
import cn from 'classnames';
import React from 'react';
import { useParams } from 'react-router-dom';

import { mockFriendsList } from '@/entities/Friend/const/mockFriendsList';
import { mockAvatar } from '@/shared/const/mockAvatar';
import { FriendsPageBottom } from '@/widgets/FriendsPageBottom/FriendsPageBottom';
import { FriendsPageTop } from '@/widgets/FriendsPageTop/FriendsPageTop';

import classes from './FriendsPage.module.scss';

export interface IFriendsPageProps {
  className?: string;
}

const FriendsPage: React.FC<IFriendsPageProps> = (props) => {
  const {
    className = '',
  } = props;

  const { username } = useParams();

  const user = mockFriendsList.find((friend) => friend.username === username);

  return (
    <Box className={ cn(classes.wrapper, {}, [ className ]) }>
      <FriendsPageTop amountFriend={user?.friendsCount.toString() || '2'} invitedAmount='2' incomeAmount='55' username={user?.username || '@username'} avatar={user?.avatar || mockAvatar}/>
      <FriendsPageBottom/>
    </Box>
  );
};

export default FriendsPage;
