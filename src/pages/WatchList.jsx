import { useSelector } from 'react-redux';
import { selectWatchlist } from '../redux/watchlist/watchlist-selectors';
import Pagination from '../components/Pagination/Pagination';
import css from '../components/WatchListSidebar/WatchListSidebar.module.css';

import WatchListList from 'components/WatchListList/WatchListList';
import { selectCurrentUserId } from '../redux/auth/auth-selectors';
import { useEffect, useState } from 'react';
import { writeUserData } from 'servises/firebase-auth';
import { Header } from 'components/Header/Header';
import WatchListSidebar from 'components/WatchListSidebar/WatchListSidebar';

const WatchList = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 4;
  const watchlist = useSelector(selectWatchlist);
  const currentUserId = useSelector(selectCurrentUserId);

  const endIndex = page * itemsPerPage;
  const startIndex = endIndex - itemsPerPage;

  const displayItems = watchlist.slice(startIndex, endIndex);

  const handlePageChange = newPage => {
    setPage(newPage);
  };

  useEffect(() => {
    if (!currentUserId) return;
    writeUserData(currentUserId, watchlist);
  }, [currentUserId, watchlist]);

  return (
    <>
      <Header />
      <div className={css.container}>
        <WatchListSidebar />
        {/* <h1>Watchlist</h1> */}
        <WatchListList watchlist={displayItems} />
        {/* Render pagination component only if there are more than itemsPerPage items */}
      </div>
      {watchlist.length > itemsPerPage && (
        <Pagination
          count={Math.ceil(watchlist.length / itemsPerPage)}
          onChange={handlePageChange}
        />
      )}
    </>
  );
};

export default WatchList;
