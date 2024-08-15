import cn from 'classnames';
import React from 'react';

import { UserInfo } from '@/entities/User';
import { ReferralsInfo } from '@/widgets/ReferralsInfo/ReferralsInfo';

import classes from './FriendsPageTop.module.scss';

interface IFriendsPageTopProps {
  className?: string;
}

export const FriendsPageTop: React.FC<IFriendsPageTopProps> = (props) => {
  const {
    className = '',
  } = props;
  return (
    <div className={ cn(classes.wrapper, {}, [ className ]) }>
      <UserInfo/>
      <ReferralsInfo/>
    </div>
  );
};
