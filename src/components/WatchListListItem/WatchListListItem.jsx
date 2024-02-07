import css from './WatchListListItem.module.css';
import defaultImg from '../../assets/default-img/no-available-image.png';
import { Link, useLocation } from 'react-router-dom';
import { formatDate } from 'servises/date';
import { removeMovie } from '../../redux/watchlist/watchlist-slice';

import { MdOutlineDeleteSweep } from 'react-icons/md';
import { PiNotepadDuotone } from 'react-icons/pi';
import { GoChecklist } from 'react-icons/go';
import { useDispatch } from 'react-redux';

const WatchListListItem = movie => {
  const location = useLocation();
  const dispatch = useDispatch();
  const BASIC_IMG_URL = 'https://image.tmdb.org/t/p/w200';

  const handlerClick = () => {
    dispatch(removeMovie(movie.id));
  };
  // console.log(movie);
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
        onClick={handlerClick}
      />
      <input className={css.item_checkbox} type="checkbox" />
      <button className={css.item_addNote_button}>
        <PiNotepadDuotone className={css.item_addNote_icon} />
        <p className={css.item_addNote_text}>Add note</p>
      </button>
      <GoChecklist className={css.item_isWarched_icon} />
    </li>
  );
};

export default WatchListListItem;
