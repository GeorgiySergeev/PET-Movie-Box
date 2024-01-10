import { HeadTitle } from 'components/HeadTitle/HeadTitle';

import { MobileHeaderContainer, HeaderBurgerIcon } from './MobileHeader.styled';

export const MobileHeader = () => {
  return (
    <MobileHeaderContainer>
      <HeadTitle>MovieBox</HeadTitle>

      <HeaderBurgerIcon />
    </MobileHeaderContainer>
  );
};
