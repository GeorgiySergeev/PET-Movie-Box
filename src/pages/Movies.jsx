// import { useEffect, useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { searchMovie } from 'servises/api';
// import { TopBar } from '../components/Topbar/Topbar';
// import { SearchForm } from '../components/SearchForm/SearchForm';
// import { Gallery } from '../components/Gallery/Gallery';
import Pagination from '../components/Pagination/Pagination';

const Movies = () => {
  // const [movies, setMovies] = useState([]);
  // const [page, setPage] = useState(1);

  // const [totalPages, setTotalPages] = useState(1);

  return (
    <div style={{ width: 998, padding: 60 }}>
      <h1>Top Rated Movies</h1>
      {/* <TopBar
        title={'Movie search on'}
        span={'MovieBox'}
        text={
          'Browse movies, add them to watchlists and share them with friends. Just click the to add a movie, the poster to see more details or to mark the movie as watched.'
        }
      />
      <SearchForm onSubmit={handleSubmit}></SearchForm> */}

      {/* <Gallery gallery={movies}></Gallery> */}
      <Pagination />
    </div>
  );
};

export default Movies;
