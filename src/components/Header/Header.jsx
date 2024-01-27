// import { HeadTitle } from 'components/HeadTitle/HeadTitle';

import { Link } from 'react-router-dom';
import { HeaderContainer, HeaderBurgerIcon, Nav } from './Header.styled';
import LoginButton from 'components/LoginButton/LoginButton';
export const Header = () => {
  return (
    <HeaderContainer>
      {/* <HeadTitle>MovieBox</HeadTitle> */}
      <Nav>
        <Link>Movies</Link>
        <Link to="/tvshows">TV Shows</Link>
        <Link to="https://www.themoviedb.org/" target="blank">
          TMDB
        </Link>
      </Nav>

      <HeaderBurgerIcon />
      <LoginButton></LoginButton>
    </HeaderContainer>
  );
};
