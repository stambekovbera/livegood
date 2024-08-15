import cn from 'classnames';
import React from 'react';

import { mockFriendsNode } from '@/entities/Friend/const/mockFriendsNode';
import { FriendsMatrixList } from '@/entities/Friend/ui/FriendsMatrixList/FriendsMatrixList';

import classes from './FriendsMatrix.module.scss';

interface IFriendsMatrixProps {
  className?: string;
}

export const FriendsMatrix: React.FC<IFriendsMatrixProps> = (props) => {
  const {
    className = '',
  } = props;
  return (
    <div className={ cn( classes.wrapper, {}, [ className ] ) }>
      { mockFriendsNode.map( (friend, index) => (
        <FriendsMatrixList side={index === 0 ? 'left' : 'right'} key={`friend-matrix-${friend.username}`} friend={ friend }/>
      ) ) }
    </div>
  );
};
