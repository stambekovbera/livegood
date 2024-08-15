import { Box, Typography } from '@mui/material';
import cn from 'classnames';
import React from 'react';

import { BalanceMini } from '@/entities/Balance/ui/BalanceMini/BalanceMini';
import { mockAvatar } from '@/shared/const/mockAvatar';
import { UserAvatar } from '@/shared/ui/UserAvatar/UserAvatar';

import classes from './UserInfo.module.scss';

interface IUserInfoProps {
  className?: string;
}

export const UserInfo: React.FC<IUserInfoProps> = (props) => {
  const {
    className = '',
  } = props;
  return (
    <Box className={ cn( classes.wrapper, {}, [ className ] ) }>
      <Box className={classes.leftContent}>
        <UserAvatar src={ mockAvatar } outlined/>
        <Box className={ classes.userInfo }>
          <Typography className={ classes.username }>
            @username
          </Typography>
          <Typography className={ classes.friendsAmount }>
            2 друга
          </Typography>
        </Box>
      </Box>
      <BalanceMini/>
    </Box>
  );
};
