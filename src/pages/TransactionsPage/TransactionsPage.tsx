import cn from 'classnames';
import React from 'react';

import BackgroundTonCoins from '@/shared/assets/png/background-ton-coins.png';
import { TransactionsPageBottom } from '@/widgets/TransactionsPageBottom/TransactionsPageBottom';
import { TransactionsPageTop } from '@/widgets/TransactionsPageTop/TransactionsPageTop';

import classes from './TransactionsPage.module.scss';

interface ITransactionsPageProps {
  className?: string;
}

const TransactionsPage: React.FC<ITransactionsPageProps> = (props) => {
  const {
    className = '',
  } = props;
  return (
    <div className={ cn( classes.wrapper, {}, [ className ] ) }>
      <img className={ classes.backgroundTonCoins } src={ BackgroundTonCoins } alt="Задний фон с TON коинами"/>
      <TransactionsPageTop/>
      <TransactionsPageBottom/>
    </div>
  );
};

export default TransactionsPage;
