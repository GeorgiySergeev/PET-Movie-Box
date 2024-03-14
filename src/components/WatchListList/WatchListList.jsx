import css from './WatchListList.module.css';
import WatchListListItem from 'components/WatchListListItem/WatchListListItem';

const WatchListList = ({ watchlist }) => {
  return (
    <>
      {watchlist.length === 0 ? (
        <h3 className={css.title}>
          Your watchlist is empty
          <br />
          <span className={css.underTitle}>Let`s add something ... </span>
        </h3>
      ) : (
        <ul className={css.list}>
          {watchlist.map(i => {
            return (
              <WatchListListItem
                key={i.id}
                id={i.id}
                img={i.img}
                title={i.title || i.name}
                rating={i.rating}
                relise={i.relise}
                first_air_date={i.first_air_date}
                vote_average={i.vote_average}
                isWatched={i.isWatched}
              />
            );
          })}
        </ul>
      )}
    </>
  );
};

export default WatchListList;
