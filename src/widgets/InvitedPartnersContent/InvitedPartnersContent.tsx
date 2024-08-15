import { Button } from '@mui/material';
import cn from 'classnames';
import React from 'react';

import { InvitedPartnersAmount } from '@/widgets/InvitedPartnersAmount/InvitedPartnersAmount';

import classes from './InvitedPartnersContent.module.scss';

interface IInvitedPartnersContentProps {
  className?: string;
}

export const InvitedPartnersContent: React.FC<IInvitedPartnersContentProps> = (props) => {
  const {
    className = '',
  } = props;
  return (
    <div className={ cn(classes.wrapper, {}, [ className ]) }>
      <InvitedPartnersAmount amount='4' maxAmount='5'/>
      <Button className={classes.button} variant='contained'>
        Пригласить друга
      </Button>
    </div>
  );
};
