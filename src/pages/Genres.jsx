import React, { useEffect, useState, useRef } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';

import Pagination from '../components/Pagination/Pagination';
// import ReactPaginate from 'react-paginate';
// import css from '../components/Pagination/Pagination.module.css';

import { LoadingSpinner } from 'components/Loader/Loader';
import { TopBar } from '../components/Topbar/Topbar';
import { GoToBack } from 'components/GoToBack/GoToBack';
import { sortByGenre } from 'servises/api';
import { Gallery } from 'components/Gallery/Gallery';
import { Container } from 'components/MovieDetailsCard/MovieDetailsCard.styled';

const Genres = () => {
  const [isLoading, setLoading] = useState(false);
  const [genres, setGenres] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const { id } = useParams();
  // const itemsPerPage = 20;

  const handlePageChange = page => {
    setPage(page);
  };

  const location = useLocation();
  const backHomeLink = useRef(location.state?.from ?? '/');

  useEffect(() => {
    setLoading(true);
    let isMounted = true;

    const getGenre = async () => {
      try {
        const data = await sortByGenre(id, page);

        if (isMounted) {
          setGenres(data.data.results);
          setTotalPages(data.data.total_pages);
        }
      } catch (error) {
        console.error('Error fetching genre:', error.message);
      } finally {
        setLoading(false);
      }
    };

    getGenre();

    return () => {
      isMounted = false;
    };
  }, [id, page]);

  return (
    <div>
      <Container className="gallery-container">
        <Link to={backHomeLink.current}>
          <GoToBack></GoToBack>
        </Link>
        <TopBar title={`Genre ${id}`}></TopBar>

        {isLoading && <LoadingSpinner />}
        <Gallery gallery={genres}></Gallery>
        {/*  */}
      </Container>
      {/* <ReactPaginate
        className={css.pagination}
        pageCount={Math.ceil(totalPages / itemsPerPage)}
        pageRangeDisplayed={10}
        marginPagesDisplayed={5}
        onPageChange={({ selected }) => handlePageChange(selected)}
        containerClassName={'pagination'}
        activeClassName={'active-pag'}
      /> */}
      <Pagination count={totalPages} onChange={handlePageChange} />
    </div>
  );
};

export default Genres;
