import { useSelector } from 'react-redux';
import { selectWatchlist } from '../redux/watchlist/watchlist-selectors';

import WatchListList from 'components/WatchListList/WatchListList';
import { selectCurrentUserId } from '../redux/auth/auth-selectors';
import { useEffect } from 'react';
import { writeUserData } from 'servises/firebase-auth';

const WatchList = () => {
  const watchlist = useSelector(selectWatchlist);
  const currentUserId = `${useSelector(selectCurrentUserId)}`;

  useEffect(() => {
    console.log(watchlist);
    if (!currentUserId) return;
    writeUserData(currentUserId, watchlist);
  }, [currentUserId, watchlist]);

  return (
    <div style={{ width: '100%' }}>
      <h1>Watchlist</h1>
      <WatchListList watchlist={watchlist} />
    </div>
  );
};

export default WatchList;
