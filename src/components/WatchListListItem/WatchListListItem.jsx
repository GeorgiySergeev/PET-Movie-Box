import css from './WatchListListItem.module.css';
import defaultImg from '../../assets/default-img/no-available-image.png';
import { Link, useLocation } from 'react-router-dom';
import { formatDate } from 'servises/date';
import {
  removeMovie,
  updateMovieInWatchList,
} from '../../redux/watchlist/watchlist-slice';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';

import { MdOutlineDeleteSweep } from 'react-icons/md';
import { PiNotepadDuotone } from 'react-icons/pi';
import { GoChecklist } from 'react-icons/go';
import { useDispatch } from 'react-redux';
// import { useEffect, useState } from 'react';

const WatchListListItem = movie => {
  // const [isWatched, setIsWatched] = useState(movie.isWatched);
  const location = useLocation();
  const dispatch = useDispatch();
  const BASIC_IMG_URL = 'https://image.tmdb.org/t/p/w200';
  // console.log(movie.isWatched);

  const onDeliteContact = id => {
    Confirm.show(
      ' ',
      'Delete movie from watchlist?',
      'Yes',
      'No',
      () => {
        dispatch(removeMovie(movie.id));
      },
      () => {
        return;
      }
    );
  };

  const handlerClickIsWatched = () => {
    dispatch(updateMovieInWatchList({ id: movie.id }));
  };

  return (
    <li className={css.item}>
      <Link state={{ from: location }} to={`/${movie.id}`} key={movie.id}>
        <img
          className={css.item_img}
          src={movie.img ? `${BASIC_IMG_URL}${movie.img}` : defaultImg}
          alt={movie.title}
        />
      </Link>
      <div className={css.item_info}>
        <p>{movie.title}</p>
        <p>{formatDate(movie.relise)}</p>
        <p>{movie.rating}</p>
        <p>{movie.title}</p>
      </div>

      <MdOutlineDeleteSweep
        className={css.item_delete_icon}
        onClick={onDeliteContact}
      />
      <input className={css.item_checkbox} type="checkbox" />
      <button className={css.item_addNote_button}>
        <PiNotepadDuotone className={css.item_addNote_icon} />
        <p className={css.item_addNote_text}>Add note</p>
      </button>

      <GoChecklist
        className={`${css.item_isWarched_icon} ${
          movie.isWatched ? css.isWatched : ''
        }`}
        onClick={handlerClickIsWatched}
      />
      {movie.isWatched && <h4 className={css.item_isWatched}>WATCHED</h4>}
    </li>
  );
};

export default WatchListListItem;
