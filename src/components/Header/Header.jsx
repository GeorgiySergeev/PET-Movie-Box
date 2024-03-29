// import { HeadTitle } from 'components/HeadTitle/HeadTitle';

import { Link, NavLink } from 'react-router-dom';
import { HeaderContainer, Nav } from './Header.styled';
import { ReactComponent as HomeIcon } from '../../assets/icons/nav/Home.svg';
import LoginButton from 'components/LoginButton/LoginButton';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useDispatch, useSelector } from 'react-redux';
import { selectEmail, selectIsLogedIn } from '../../redux/auth/auth-selectors';
import { getAuth, signOut } from 'firebase/auth';
// import { useState } from 'react';
import { app } from '../../servises/firebase-auth';
import { removeUser } from '../../redux/auth/auth-slice';

import { claerWatchlist } from '../../redux/watchlist/watchlist-slice';
import { Confirm } from 'notiflix';

export const Header = () => {
  const auth = getAuth(app);
  const userEmail = useSelector(selectEmail);
  const isLoggedIn = useSelector(selectIsLogedIn);
  const dispatch = useDispatch();

  const handleLogout = () => {
    Confirm.show(
      ' ',
      'Exit from account?',
      'Yes',
      'No',
      () => {
        signOut(auth)
          .then(() => {
            // console.log('log out');
            // Успешный выход
            dispatch(removeUser());
            dispatch(claerWatchlist());
          })
          .catch(error => {
            // Ошибка выхода
            console.log('Logout Error:', error.message);
          });
      },
      () => {
        return;
      }
    );
    // console.log('logout');
  };

  return (
    <HeaderContainer>
      {/* <HeadTitle>MovieBox</HeadTitle> */}
      <Nav>
        <NavLink to="/">
          <HomeIcon />
        </NavLink>
        <NavLink
          to="/movies"
          style={{ border: '1px solid #31d0aa', borderRadius: 8, padding: 5 }}
        >
          Top Rated Movies
        </NavLink>
        <NavLink
          to="/tvshows"
          style={{ border: '1px solid #31d0aa', borderRadius: 8, padding: 5 }}
        >
          Top Rated TV Shows
        </NavLink>
        <NavLink
          to="https://www.themoviedb.org/"
          target="blank"
          style={{ border: '1px solid #31d0aa', borderRadius: 8, padding: 5 }}
        >
          TMDB
        </NavLink>
      </Nav>
      <SearchForm />

      {isLoggedIn ? (
        <LoginButton onClick={handleLogout} user={userEmail} />
      ) : (
        <Link to="/login">
          <LoginButton text={'Log In'} />
        </Link>
      )}

      {/* <HeaderBurgerIcon />
      <Link to="/login">
        <LoginButton text={'Log In'} />
      </Link> */}
    </HeaderContainer>
  );
};
