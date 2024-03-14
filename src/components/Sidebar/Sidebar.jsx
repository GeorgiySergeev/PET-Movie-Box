import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { GenreList } from 'components/GenreList/GenreList';
import {
  SidebarContainer,
  Nav,
  HeadTitle,
  WatchListButton,
} from './Sidebar.styled';
// import Filter from '../Filter/Filter';

export const Sidebar = () => {
  const [shouldShowComponent, setShouldShowComponent] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const shouldShow = path.includes('/watchlist');
    setShouldShowComponent(shouldShow);
  }, [location.pathname]);

  return (
    <SidebarContainer>
      <HeadTitle>MovieBox</HeadTitle>
      <Nav></Nav>
      <Link to={'/watchlist'}>
        <WatchListButton>My watchlist</WatchListButton>
      </Link>
      {!shouldShowComponent && <GenreList></GenreList>}
      {shouldShowComponent && <div></div>}
      {/* <Filter /> */}
    </SidebarContainer>
  );
};
