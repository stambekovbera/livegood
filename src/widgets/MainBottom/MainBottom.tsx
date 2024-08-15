import cn from 'classnames';
import React from 'react';

import { CoinContent } from '@/widgets/CoinContent/CoinContent';
import { InvitedPartnersContent } from '@/widgets/InvitedPartnersContent/InvitedPartnersContent';

import classes from './MainBottom.module.scss';

interface IMainBottomProps {
  className?: string;
}

export const MainBottom: React.FC<IMainBottomProps> = (props) => {
  const {
    className = '',
  } = props;
  return (
    <div className={ cn(classes.wrapper, {}, [ className ]) }>
      <CoinContent/>

      <InvitedPartnersContent/>
    </div>
  );
};
