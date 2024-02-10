import { useSelector } from 'react-redux';
import { selectWatchlist } from '../redux/watchlist/watchlist-selectors';
import Pagination from '../components/Pagination/Pagination';

import WatchListList from 'components/WatchListList/WatchListList';
import { selectCurrentUserId } from '../redux/auth/auth-selectors';
import { useEffect, useState } from 'react';
import { writeUserData } from 'servises/firebase-auth';

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
    <div style={{ width: '100%' }}>
      {/* <h1>Watchlist</h1> */}
      <WatchListList watchlist={displayItems} />
      {/* Render pagination component only if there are more than itemsPerPage items */}
      {watchlist.length > itemsPerPage && (
        <Pagination
          count={Math.ceil(watchlist.length / itemsPerPage)}
          onChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default WatchList;
