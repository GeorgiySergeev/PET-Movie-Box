// import { GenreList } from 'components/GenreList/GenreList';

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchFilteredMovies } from '../../redux/movies/operations';

import { getGenre } from 'servises/api';
import { Button } from 'components/GenreList/GenreList.styled';
// import { NavLink } from 'react-router-dom';

const Filter = () => {
  const [genre, setGenre] = useState([]);
  // const [currentDate, setCurrentDate] = useState();
  const currentDate = new Date().toISOString().slice(0, 10);

  const dispatch = useDispatch();

  const [filterData, setFilterData] = useState({
    page: 1,
    genre: '',
    year: '',
    releaseDateFrom: '',
    releaseDateTo: '',
  });
  // console.log(filterData);

  // useEffect(() => {
  //   dispatch(getFilteredData());
  // }, [dispatch]);

  useEffect(() => {
    const getGenresList = async () => {
      const data = await getGenre();

      setGenre(data.genres);
    };
    getGenresList();
  }, []);

  const onClick = e => {
    e.preventDefault();
    const selectedGenre = e.target.dataset.id;
    setFilterData(prevFilterData => ({
      ...prevFilterData,
      genre: selectedGenre,
    }));
  };
  const handleInputChange = e => {
    const yearValue = e.currentTarget.value;
    setFilterData(prevFilterData => ({
      ...prevFilterData,
      year: yearValue,
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log('send data');
    dispatch(fetchFilteredMovies(filterData));
  };

  const handleDateChange = e => {
    console.log('e', e.target.value);
    switch (e.target.name) {
      case 'from':
        setFilterData(prevFilterData => ({
          ...prevFilterData,
          releaseDateFrom: e.target.value,
        }));
        break;
      case 'to':
        setFilterData(prevFilterData => ({
          ...prevFilterData,
          releaseDateTo: e.target.value,
        }));
        break; // Добавьте break, чтобы прервать выполнение switch после 'to'

      default:
        break;
    }
  };

  return (
    <>
      <h2>Filter</h2>
      <form action="onSubmit" onSubmit={handleSubmit}>
        {genre.map(({ id, name }, index) => {
          return (
            <Button key={id} onClick={onClick} data-id={id}>
              {name}
            </Button>
          );
        })}

        <input
          type="text"
          name="year"
          onChange={handleInputChange}
          placeholder="Year"
        />
        <h2>Release Dates</h2>
        <p>From</p>
        <input type="date" name="from" onChange={handleDateChange} />
        <p>to</p>
        <input
          type="date"
          name="to"
          value={currentDate}
          onChange={handleDateChange}
        />

        <select name="sort" id=""></select>

        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default Filter;
