import { Box } from '@mui/material';
import cn from 'classnames';
import React, { useState } from 'react';

import { FriendsMatrix, FriendsVariantTabs } from '@/entities/Friend';
import { CopyInviteButton } from '@/features/CopyInviteButton/ui/CopyInviteButton';

import classes from './FriendsPageBottom.module.scss';

interface IFriendsPageBottomProps {
  className?: string;
}

export const FriendsPageBottom: React.FC<IFriendsPageBottomProps> = (props) => {
  const {
    className = '',
  } = props;

  const [ activeVariant, setActiveVariant ] = useState('matrix');

  const handleChangeActiveVariant = (value: string) => {
    setActiveVariant( value );
  };

  return (
    <Box className={ cn( classes.wrapper, {}, [ className ] ) }>
      <Box className={ classes.top }>
        <FriendsVariantTabs value={ activeVariant } onChange={ handleChangeActiveVariant }/>
        {activeVariant === 'matrix' && <FriendsMatrix/>}
      </Box>
      <Box className={classes.bottom}>
        <CopyInviteButton/>
      </Box>
    </Box>
  );
};
