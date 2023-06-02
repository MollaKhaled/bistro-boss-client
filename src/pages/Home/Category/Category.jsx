import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import silde1 from '../../../assets/home/slide1.jpg';
import silde2 from '../../../assets/home/slide2.jpg';
import silde3 from '../../../assets/home/slide3.jpg';
import silde4 from '../../../assets/home/slide4.jpg';
import silde5 from '../../../assets/home/slide5.jpg';
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
  <section>
    <SectionTitle 
    subHeading={"From 11:am to 10:pm"}
    heading={"Order Online"}
    >
    </SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src={silde1} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={silde2} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">Pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={silde3} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">Soups</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={silde4} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">Desert</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={silde5} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">Salads</h3>
        </SwiperSlide>

      </Swiper>
  </section>
  );
};

export default Category;