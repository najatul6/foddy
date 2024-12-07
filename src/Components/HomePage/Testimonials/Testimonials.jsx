import Container from "../../Shared/Container/Container";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import TestimonialCard from "./TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { reviews } from "../../../utils/reviews";

const Testimonials = () => {
  return (
    <div className="py-[120px] bg-deep-orange mt-[120px]">
      <Container>
        <div className="w-full">
          <SectionHeader
            heading="Our Guests Share This About Our Foods."
            subHeading="testimonials"
            white={"#FFF"}
          />
        </div>
        <div className="w-full mt-12">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
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
