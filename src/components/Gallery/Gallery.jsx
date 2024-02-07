import React, { useState, useEffect } from 'react';
import { GallerySection } from './Gallery.styled';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { GalleryList } from './Gallery.styled';
import { MobileMovieCard } from 'components/Mobile/MobileGallery/MobileMovieCard';

import { useSelector } from 'react-redux';
import { selectWatchlist } from '../../redux/watchlist/watchlist-selectors';

export const Gallery = ({ gallery }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const watchlist = useSelector(selectWatchlist);

  const isInWatchList = id => {
    return watchlist.find(el => el.id === id);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <GallerySection>
      <GalleryList>
        {gallery.map(
          ({
            id,
            poster_path,
            title,
            name,
            popularity,
            release_date,
            first_air_date,
            vote_average,
          }) => {
            const MovieComponent = isMobile ? MobileMovieCard : MovieCard;

            return (
              <MovieComponent
                key={id}
                id={id}
                img={poster_path}
                title={title || name}
                rating={popularity}
                relise={release_date}
                first_air_date={first_air_date}
                vote_average={vote_average}
                isAdded={isInWatchList(id)}
              />
            );
          }
        )}
      </GalleryList>
    </GallerySection>
  );
};
