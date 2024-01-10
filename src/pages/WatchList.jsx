import React from 'react';
import { TopBar } from '../components/Topbar/Topbar';
// import { useState, useEffect } from 'react';
// import { Button } from 'components/Button/Button.styled';

const WatchList = () => {
  // const [list, setList] = useState([]);

  return (
    <div>
      <TopBar
        title="Welcome to"
        span="Watchlists"
        text={
          'Create your watch list, add favorite movies, share with friends. Movie Box brings joy!"'
        }
      ></TopBar>
    </div>
  );
};

export default WatchList;
