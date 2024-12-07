import Container from "../../Shared/Container/Container"
import SectionHeader from "../../Shared/SectionHeader/SectionHeader"
import TestimonialCard from "./TestimonialCard"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

const Testimonials = () => {
  return (
    <div className="py-[120px] bg-deep-orange mt-[120px] flex justify-center items-center">
        <Container>
            <div className="py-[120px]">
                <SectionHeader heading="Our Guests Share This About Our Foods." subHeading="testimonials" white={"#FFF"}/>
                <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
                  <TestimonialCard />
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Testimonials