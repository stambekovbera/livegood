import cn from 'classnames';
import React from 'react';

import classes from './FriendsMatrixListItem.module.scss';

interface IFriendsMatrixListItemProps {
  className?: string;
}

export const FriendsMatrixListItem: React.FC<IFriendsMatrixListItemProps> = (props) => {
  const {
    className = '',
  } = props;
  return (
    <div className={ cn(classes.wrapper, {}, [ className ]) }>
    </div>
  );
};
