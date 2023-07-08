import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

 const Slider = ({ data }) => {

  return (
   
   
   
   
   
    <div className="w-full">
      <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={1}
    
    pagination={{ clickable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >
   <div className="">
  

   {data.map((slide) => (
        <SwiperSlide key={slide.image} className="">
          <img src={slide.image} class="h-44 rounded-t-2xl shadow-md w-full  2xl:w-full 2xl:h-44 " alt={slide.title}/>
        </SwiperSlide>
      ))}   </div>

  </Swiper>
    </div>
  )

}

export default Slider;