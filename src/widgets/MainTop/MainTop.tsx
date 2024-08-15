import { Box, Button } from '@mui/material';
import cn from 'classnames';
import React from 'react';

import { Balance } from '@/entities/Balance/ui/Balance';
import { TicketValidityPeriod } from '@/features/TicketValidityPeriod';
import BookmarkIcon from '@/shared/assets/svg/Bookmark.svg?react';

import classes from './MainTop.module.scss';

interface IMainTopProps {
  className?: string;
}

export const MainTop: React.FC<IMainTopProps> = (props) => {
  const {
    className = '',
  } = props;
  return (
    <Box className={ cn(classes.wrapper, {}, [ className ]) }>
      <Box className={classes.top}>
        <Balance/>

        <Button className={classes.dailyButton}>
          <BookmarkIcon/>
          Ежедневки
        </Button>
      </Box>

      <TicketValidityPeriod expired={true}/>
    </Box>
  );
};
