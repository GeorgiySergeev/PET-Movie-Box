// import { HeadTitle } from 'components/HeadTitle/HeadTitle';

import { Link } from 'react-router-dom';
import { HeaderContainer, HeaderBurgerIcon, Nav } from './Header.styled';
import { ReactComponent as HomeIcon } from '../../assets/icons/nav/Home.svg';
import LoginButton from 'components/LoginButton/LoginButton';
import { SearchForm } from 'components/SearchForm/SearchForm';

export const Header = () => {
  return (
    <HeaderContainer>
      {/* <HeadTitle>MovieBox</HeadTitle> */}
      <Nav>
        <Link to="/">
          <HomeIcon />
        </Link>
        <Link to="/movies">Movies</Link>
        <Link to="/tvshows">TV Shows</Link>
        <Link to="https://www.themoviedb.org/" target="blank">
          TMDB
        </Link>
      </Nav>
      <SearchForm />

      <HeaderBurgerIcon />
      <Link to="/login">
        <LoginButton />
      </Link>
    </HeaderContainer>
  );
};
