// import { GenreList } from 'components/GenreList/GenreList';

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getFilteredData } from '../../redux/filter/filter-operations';

import { getGenre } from 'servises/api';

const Filter = () => {
  const [genre, setGenre] = useState([]);
  const dispatch = useDispatch();

  const [filterData, setFilterData] = useState({
    genre: '',
  });
  console.log(filterData);

  useEffect(() => {
    dispatch(getFilteredData());
  }, [dispatch]);

  useEffect(() => {
    const getGenresList = async () => {
      const data = await getGenre('War');

      setGenre(data.genres);
    };
    getGenresList();
  }, []);

  const selectOnChange = e => {
    setFilterData(e.target.value);
  };

  return (
    <>
      <h2>Filter</h2>
      <form action="onSubmit">
        <select name="genre" id="genre" onChange={selectOnChange}>
          <option>Select category</option>
          {genre.map(({ id, name }, index) => {
            return <option key={id}>{name}</option>;
          })}
        </select>
      </form>
    </>
  );
};

export default Filter;
