import { Box, Button, Typography } from '@mui/material';
import cn from 'classnames';
import React from 'react';

import classes from './ReferralsInfo.module.scss';

interface IReferralsInfoProps {
  className?: string;
}

export const ReferralsInfo: React.FC<IReferralsInfoProps> = (props) => {
  const {
    className = '',
  } = props;
  return (
    <Box className={ cn( classes.wrapper, {}, [ className ] ) }>
      <Box className={classes.grid}>
        <Box className={classes.content}>
          <Typography className={classes.label}>
            Доход с рефералов
          </Typography>
          <Typography className={classes.value}>
            55 TON
          </Typography>
        </Box>
        <Box className={classes.content}>
          <Typography className={classes.label}>
            Друзей приглашено
          </Typography>
          <Typography className={classes.value}>
            2
          </Typography>
        </Box>
      </Box>
      <Button variant='contained'>Вывести</Button>
    </Box>
  );
};
