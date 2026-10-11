import Container from "../../Shared/Container/Container";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import TestimonialCard from "./TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { reviews } from "../../../utils/reviews";

const Testimonials = () => {
  return (
    <div className="py-10 md:py-[30px] bg-deep-orange">
      <Container>
        <div className="w-full md:w-2/3 lg:w-1/3 mx-auto text-center px-4 md:px-0">
          <SectionHeader
            heading="Our Guests Share This About Our Foods."
            subHeading="testimonials"
            white={"#FFF"}
          />
        </div>
        
        <div className="w-full mt-8 md:mt-12 px-2 sm:px-6 md:px-10">
          <Swiper
            autoplay={{ delay: 1500 }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            {reviews?.map((review, id) => (
              <SwiperSlide key={id}>
                <TestimonialCard review={review} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;