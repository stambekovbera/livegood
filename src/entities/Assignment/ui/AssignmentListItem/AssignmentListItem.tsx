import { Box, IconButton, Typography } from '@mui/material';
import cn from 'classnames';
import React from 'react';

import { IAssignment } from '@/entities/Assignment/types/assignment';
import ArrowRight from '@/shared/assets/svg/arrow-right-orange.svg?react';
import DoneIcon from '@/shared/assets/svg/Assignment/checkbox.svg?react';

import classes from './AssignmentListItem.module.scss';

interface IAssignmentListItemProps {
  assignment: IAssignment;
  className?: string;
}

export const AssignmentListItem: React.FC<IAssignmentListItemProps> = (props) => {
  const {
    className = '',
    assignment
  } = props;

  return (
    <Box className={ cn( classes.wrapper, {
      [`${classes.disable}`]: assignment.isDone
    }, [ className ] ) }>
      <Box className={ classes.right }>
        <img src={ assignment.icon } alt="Изображение задачи"/>
        <Box className={ classes.infoWrapper }>
          <Typography className={ cn( classes.title, {
            [`${classes.disable}`]: assignment.isDone
          }, [] ) }>
            { assignment.title }
          </Typography>
          <Typography className={ cn( classes.amount, {
            [`${classes.disable}`]: assignment.isDone
          }, [] ) }>
            { assignment.reward } LG
          </Typography>
        </Box>
      </Box>
      { !assignment.isDone && (
        <IconButton>
          <ArrowRight/>
        </IconButton>
      ) }
      { assignment.isDone && (
        <DoneIcon/>
      ) }
    </Box>
  );
};
