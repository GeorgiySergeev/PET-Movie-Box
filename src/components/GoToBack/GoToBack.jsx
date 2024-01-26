import { SlArrowLeft } from 'react-icons/sl';
import { GoBackButton } from './GoToBack.styled';

import React from 'react';

export const GoToBack = () => {
  return (
    <GoBackButton>
      <SlArrowLeft></SlArrowLeft>
      <p>Go back</p>
    </GoBackButton>
  );
};
