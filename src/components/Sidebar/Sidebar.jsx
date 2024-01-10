import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ReactComponent as HomeIcon } from '../../assets/icons/nav/Home.svg';
import { ReactComponent as SearchIcon } from '../../assets/icons/nav/search.svg';
// import { GenreList } from 'components/GenreList/GenreList';
import {
  SidebarContainer,
  Nav,
  HeadTitle,
  NavButton,
  AddToListButton,
} from './Sidebar.styled';

export const Sidebar = () => {
  const [shouldShowComponent, setShouldShowComponent] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const shouldShow = path.includes('/watch-list');
    setShouldShowComponent(shouldShow);
  }, [location.pathname]);

  return (
    <SidebarContainer>
      <HeadTitle>MovieBox</HeadTitle>
      <Nav>
        <NavLink to="/">
          <NavButton>
            <HomeIcon />
            <p>Home</p>
          </NavButton>
        </NavLink>
        <NavLink to="/movies">
          <NavButton>
            <SearchIcon />
            <p>Search movies</p>
          </NavButton>
        </NavLink>
      </Nav>
      <Link to={'/watchlist'}>
        <AddToListButton>My watchlist</AddToListButton>
      </Link>
      {/* {!shouldShowComponent && <GenreList></GenreList>} */}
      {shouldShowComponent && <div>Reel</div>}
    </SidebarContainer>
  );
};
