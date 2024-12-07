import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import PropTypes from "prop-types";

const TestimonialCard = ({ review }) => {
  const { name, position, image, review: reviewText, rating } = review;
  return (
    <div>
        <div className="w-full h-full overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
      <div className="px-16 py-20 flex flex-col justify-center items-start gap-5 bg-deep-black">
        <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
        <p className="text-white text-4xl text-justify font-cormorantGaramond font-bold italic tracking-[2px]">&ldquo;{reviewText}&rdquo;</p>
        <div className="font-cormorantGaramond capitalize">
          <h3 className="text-white text-[48px] font-bold">{name}</h3>
          <p className="text-white text-[24px] font-normal">{position}</p>
        </div>
      </div>
    </div>
  );
};

TestimonialCard.propTypes = {
    review: PropTypes.object,
}

export default TestimonialCard;
