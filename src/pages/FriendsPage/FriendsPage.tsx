import { Box } from '@mui/material';
import cn from 'classnames';
import React from 'react';

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
  return (
    <Box className={ cn(classes.wrapper, {}, [ className ]) }>
      <FriendsPageTop/>
      <FriendsPageBottom/>
    </Box>
  );
};

export default FriendsPage;
