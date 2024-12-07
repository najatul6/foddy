import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import PropTypes from "prop-types";

const TestimonialCard = ({ review }) => {
  const { name, position, image, review: reviewText, rating } = review;

  return (
    <div className="relative flex items-center h-[500px] bg-deep-black rounded-lg overflow-hidden">
      {/* Image Section */}
      <div className="w-1/2 h-full">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-l-lg"
        />
      </div>

      {/* Content Section */}
      <div className="w-1/2 p-12 text-white">
        <Rating style={{ maxWidth: 120 }} value={rating} readOnly />
        <p className="mt-6 text-2xl italic font-cormorantGaramond tracking-wide">
          &ldquo;{reviewText}&rdquo;
        </p>
        <div className="mt-8">
          <h3 className="text-4xl font-bold">{name}</h3>
          <p className="text-lg font-medium">{position}</p>
        </div>
      </div>
    </div>
  );
};

TestimonialCard.propTypes = {
  review: PropTypes.object,
};

export default TestimonialCard;
