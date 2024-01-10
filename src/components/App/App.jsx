import { Route, Routes } from 'react-router-dom';
import { Container } from './App.styled';

import { lazy } from 'react';
import Layout from 'components/Layout/Layout';

const Home = lazy(() => import('pages/Home'));
const WatchList = lazy(() => import('pages/WatchList'));

export const App = () => {
  return (
    // <Container className="main-container">
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/watchlist" element={<WatchList />} />
      </Route>
    </Routes>
    // </Container>
  );
};
