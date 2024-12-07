import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const TestimonialCard = ({ review }) => {
  const { name, position, image, review: reviewText, rating } = review;
  return (
    <div>
      <div className="">
        <div className="w-full h-full overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="mt-[30px]">
        <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
        <p className="text-white text-[18px]">{reviewText}</p>
        <div className="">
          <h3 className="text-white text-[24px] font-bold">{name}</h3>
          <p className="text-white text-[18px]">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
