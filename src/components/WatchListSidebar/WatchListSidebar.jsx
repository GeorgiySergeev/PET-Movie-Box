import css from './WatchListSidebar.module.css';

const WatchListSidebar = () => {
  return (
    <div className={css.sidebar_container}>
      <h2 className={css.title}>My watchlist</h2>
    </div>
  );
};

export default WatchListSidebar;