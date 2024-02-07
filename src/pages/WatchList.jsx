import { useSelector } from 'react-redux';
import { selectWatchlist } from '../redux/watchlist/watchlist-selectors';

import WatchListList from 'components/WatchListList/WatchListList';

const WatchList = () => {
  const watchlist = useSelector(selectWatchlist);

  return (
    <div style={{ width: '100%' }}>
      <h1>Watchlist</h1>
      <WatchListList watchlist={watchlist} />
    </div>
  );
};

export default WatchList;
