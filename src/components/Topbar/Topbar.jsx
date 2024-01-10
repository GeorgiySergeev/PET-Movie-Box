import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper/modules';
import 'swiper/css/bundle';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

import slides from 'slider.json';

import { TopBarWrapper, TopBarTitle, TopBarText } from './Topbar.styled';

export const TopBar = ({ title, text, span }) => {
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
        {slides.map(({ image, title }, i) => {
          return (
            <SwiperSlide key={i}>
              <img src={image} alt={title} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </TopBarWrapper>
  );
};
