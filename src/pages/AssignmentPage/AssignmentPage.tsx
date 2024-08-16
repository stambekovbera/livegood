import cn from 'classnames';
import React from 'react';

import { AssignmentPageBottom } from '@/widgets/AssignmentPageBottom/AssignmentPageBottom';
import { AssignmentPageTop } from '@/widgets/AssignmentPageTop/AssignmentPageTop';

import classes from './AssignmentPage.module.scss';

interface IAssignmentPageProps {
  className?: string;
}

const AssignmentPage: React.FC<IAssignmentPageProps> = (props) => {
  const {
    className = '',
  } = props;

  return (
    <div className={ cn(classes.wrapper, {}, [ className ]) }>
      <AssignmentPageTop/>
      <AssignmentPageBottom/>
    </div>
  );
};

export default AssignmentPage;
