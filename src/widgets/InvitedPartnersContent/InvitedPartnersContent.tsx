import cn from 'classnames';
import React, { useState } from 'react';

import { StatusesDrawer } from '@/entities/Status';
import { CopyInviteButton } from '@/features/CopyInviteButton/ui/CopyInviteButton';
import { InvitedPartnersAmount } from '@/widgets/InvitedPartnersAmount/InvitedPartnersAmount';

import classes from './InvitedPartnersContent.module.scss';

interface IInvitedPartnersContentProps {
  className?: string;
}

export const InvitedPartnersContent: React.FC<IInvitedPartnersContentProps> = (props) => {
  const {
    className = '',
  } = props;

  const [ isOpenDrawer, setIsOpenDrawer ] = useState<boolean>(false);

  const handleCloseDrawer = () => {
    setIsOpenDrawer( false );
  };

  const handleOpenDrawer = () => {
    setIsOpenDrawer( true );
  };

  return (
    <>
      <div className={ cn( classes.wrapper, {}, [ className ] ) }>
        <InvitedPartnersAmount amount='4' maxAmount='5'/>
        <CopyInviteButton/>
      </div>
      <StatusesDrawer isOpen={isOpenDrawer} onClose={handleCloseDrawer}/>
    </>
  );
};
