import { useRef, useState } from "react";
import Container from "../../Shared/Container/Container";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import TestimonialCard from "./TestimonialCard";
import { reviews } from "../../../utils/reviews";

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(true); // Control visibility of the carousel
  const carouselRef = useRef(null);

  const handlePrev = () => {
    const width = carouselRef.current.clientWidth;
    carouselRef.current.scrollBy({ left: -width, behavior: "smooth" });
  };

  const handleNext = () => {
    const width = carouselRef.current.clientWidth;
    carouselRef.current.scrollBy({ left: width, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && ( // Only render the carousel if it is visible
        <div className="py-[120px] bg-deep-orange mt-[120px] flex justify-center items-center">
          <Container>
            <div className="py-[120px]">
              <SectionHeader
                heading="Our Guests Share This About Our Foods."
                subHeading="testimonials"
                white={"#FFF"}
              />
              <div className="relative w-full">
                {/* Carousel Wrapper */}
                <div
                  ref={carouselRef}
                  className="flex overflow-x-scroll scroll-smooth no-scrollbar space-x-4"
                >
                  {reviews?.map((item, index) => (
                    <div
                      key={index}
                      className="w-full flex-shrink-0 h-[600px] rounded-lg bg-gray-200 shadow-md flex items-center justify-center text-lg font-semibold"
                    >
                      <TestimonialCard review={item} />
                    </div>
                  ))}
                </div>

                {/* Previous Button */}
                <button
                  onClick={handlePrev}
                  className="absolute top-1/2 -translate-y-1/2 left-2 bg-blue-500 text-white px-3 py-2 rounded-full shadow-md hover:bg-blue-600 transition"
                >
                  Prev
                </button>

                {/* Next Button */}
                <button
                  onClick={handleNext}
                  className="absolute top-1/2 -translate-y-1/2 right-2 bg-blue-500 text-white px-3 py-2 rounded-full shadow-md hover:bg-blue-600 transition"
                >
                  Next
                </button>
              </div>
              <div></div>
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default Testimonials;
