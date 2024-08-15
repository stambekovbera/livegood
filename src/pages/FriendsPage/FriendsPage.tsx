import cn from 'classnames';
import React from 'react';

import classes from './FriendsPage.module.scss';

export interface IFriendsPageProps {
  className?: string;
}

const FriendsPage: React.FC<IFriendsPageProps> = (props) => {
  const {
    className = '',
  } = props;
  return (
    <div className={ cn(classes.wrapper, {}, [ className ]) }>
    </div>
  );
};

export default FriendsPage;
