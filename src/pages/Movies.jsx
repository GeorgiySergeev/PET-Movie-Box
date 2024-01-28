// import { useEffect, useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { searchMovie } from 'servises/api';
// import { TopBar } from '../components/Topbar/Topbar';
// import { SearchForm } from '../components/SearchForm/SearchForm';
// import { Gallery } from '../components/Gallery/Gallery';
// import Pagination from '../components/Pagination/Pagination';

// const Movies = () => {
//   const [movies, setMovies] = useState([]);
//   const [page, setPage] = useState(1);
//   const [searchParams, setSearchParams] = useSearchParams();

//   // const [totalPages, setTotalPages] = useState(1);

//   useEffect(() => {
//     const searchQuery = searchParams.get('query') ?? '';
//     if (!searchQuery) return;

//     const getMovies = async () => {
//       try {
//         const { results } = await searchMovie(searchQuery, page);

//         setMovies(results);
//       } catch (error) {
//         console.log(error.message);
//       }
//     };
//     getMovies();
//   }, [page, searchParams]);

//   const handleSubmit = value => {
//     const query = value !== '' ? { query: value } : {};
//     setSearchParams(query);

//     setPage(1);
//     setMovies([]);
//   };

//   return (
//     <div style={{ width: 998, padding: 60 }}>
//       <TopBar
//         title={'Movie search on'}
//         span={'MovieBox'}
//         text={
//           'Browse movies, add them to watchlists and share them with friends. Just click the to add a movie, the poster to see more details or to mark the movie as watched.'
//         }
//       />
//       <SearchForm onSubmit={handleSubmit}></SearchForm>
//       <Pagination />

//       <Gallery gallery={movies}></Gallery>
//     </div>
//   );
// };

// export default Movies;
