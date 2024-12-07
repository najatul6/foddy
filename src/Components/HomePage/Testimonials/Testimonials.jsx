import Container from "../../Shared/Container/Container";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import TestimonialCard from "./TestimonialCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { reviews } from "../../../utils/reviews";

const Testimonials = () => {
  return (
    <div className="py-[120px] bg-deep-orange mt-[120px] flex justify-center items-center">
      <Container>
        <div className="py-[120px]">
          <SectionHeader
            heading="Our Guests Share This About Our Foods."
            subHeading="testimonials"
            white={"#FFF"}
          />
          <div>
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {reviews?.map((review,id)=>{
                return <SwiperSlide key={id}>
                  <TestimonialCard review={review} />
                </SwiperSlide>
              })}
            </Swiper>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
