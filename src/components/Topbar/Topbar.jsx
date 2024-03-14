import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Autoplay,
  Navigation,
  Pagination,
  // Scrollbar,
  // A11y,
} from 'swiper/modules';
import 'swiper/css/bundle';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

import { TopBarWrapper, TopBarTitle, TopBarText } from './Topbar.styled';
import { getAllTrending } from 'servises/api';

const BASIC_IMG_URL = 'https://image.tmdb.org/t/p/w1280';

export const TopBar = ({ title, text, span }) => {
  const [moviesSlides, setMoviesSlides] = useState([]);

  const getSlides = async () => {
    try {
      const { results } = await getAllTrending('day');
      if (!results) {
        throw new Error();
      }
      setMoviesSlides(results);
      // console.log(results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSlides();
  }, []);

  return (
    <TopBarWrapper>
      <TopBarTitle>
        {title} {<span style={{ color: '#f33f3f' }}>{span}</span>}
        {/* Welcome to <span style={{ color: '#f33f3f' }}>MovieBox</span> */}
      </TopBarTitle>
      <TopBarText>{text}</TopBarText>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {moviesSlides.map(({ backdrop_path, title }, i) => {
          return (
            <SwiperSlide key={i}>
              <>
                <img src={`${BASIC_IMG_URL}${backdrop_path}`} alt={title} />
                <h3>{title}</h3>
              </>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </TopBarWrapper>
  );
};
