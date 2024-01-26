// import { HeadTitle } from 'components/HeadTitle/HeadTitle';

import { Link } from 'react-router-dom';
import { HeaderContainer, HeaderBurgerIcon, Nav } from './Header.styled';

export const Header = () => {
  return (
    <HeaderContainer>
      {/* <HeadTitle>MovieBox</HeadTitle> */}
      <Nav>
        <Link>Movies</Link>
        <Link to="/tvshows">TV shwos</Link>
        <Link to="https://www.themoviedb.org/" target="blank">
          Top IMDb
        </Link>
      </Nav>

      <HeaderBurgerIcon />
    </HeaderContainer>
  );
};
