import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default function Slider({children}) {
  return (
    <>
      <Swiper
        slidesPerView="auto"
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
            children.length > 0 ? children.map((item, index) => (
                <SwiperSlide key={index}>{item}</SwiperSlide>
            )):
            <SwiperSlide className='bg-red-500'>{children}</SwiperSlide>
        }

        
       
      </Swiper>
    </>
  );
}
