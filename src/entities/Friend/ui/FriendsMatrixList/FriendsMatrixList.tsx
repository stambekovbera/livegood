import { Box, Typography } from '@mui/material';
import cn from 'classnames';
import React from 'react';

import { IFriendNode } from '@/entities/Friend/types/friend';
import { UserAvatar } from '@/shared/ui/UserAvatar/UserAvatar';

import classes from './FriendsMatrixList.module.scss';

interface IFriendsMatrixListProps {
  friend: IFriendNode | null;
  side: 'left' | 'right';
  depth?: number;
  className?: string;
}

const sizes = {
  1: 80,
  2: 60,
  3: 38,
};

export const FriendsMatrixList: React.FC<IFriendsMatrixListProps> = (props) => {
  const {
    className = '',
    depth = 1,
    friend,
    side
  } = props;

  return (
    <Box className={ cn( classes.wrapper, {}, [ className ] ) }>
      <Box width={sizes[depth as keyof typeof sizes]} className={ classes.friendInfo }>
        <UserAvatar width={ sizes[depth as keyof typeof sizes] } height={ sizes[depth as keyof typeof sizes] } src={ friend?.avatar || null }/>
        <Typography className={classes.username} sx={{ width: sizes[depth as keyof typeof sizes] }}>
          { friend?.username || '—' }
        </Typography>
      </Box>
      {depth < 3 && (
        <Box className={cn(classes.nextDept, {
          [`${classes.lastDepth}`]: depth === 2
        })}>
          <FriendsMatrixList side={side} friend={friend?.left || null} depth={depth + 1}/>
          <FriendsMatrixList side={side} friend={friend?.right || null} depth={depth + 1}/>
        </Box>
      )}
    </Box>
  );
};
