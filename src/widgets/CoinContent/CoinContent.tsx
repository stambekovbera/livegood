import { Box, Button } from '@mui/material';
import cn from 'classnames';
import React from 'react';

import CoinBigIcon from '@/shared/assets/svg/coin-big.svg?react';
import { CoinsAmount } from '@/widgets/CoinsAmount/CoinsAmount';
import { TapsAmount } from '@/widgets/TapsAmount/TapsAmount';

import classes from './CoinContent.module.scss';

interface ICoinContentProps {
  className?: string;
}

export const CoinContent: React.FC<ICoinContentProps> = (props) => {
  const {
    className = '',
  } = props;
  return (
    <Box className={ cn(classes.wrapper, {}, [ className ]) }>
      <Box className={classes.top}>
        <CoinsAmount amount='8 555'/>
        <TapsAmount amount='15' maxAmount='100'/>
      </Box>
      <Box className={classes.bottom}>
        <Button className={classes.coinButton}>
          <CoinBigIcon/>
        </Button>
      </Box>
    </Box>
  );
};
