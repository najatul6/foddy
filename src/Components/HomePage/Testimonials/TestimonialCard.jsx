import insertCss from 'insert-css'
import { StarRating } from "react-star-rating-input"

const TestimonialCard = ({review}) => {
    const {name, position, image, review:reviewText, rating} = review
  return (
    <div>
        <div className="">
            <div className="w-full h-full overflow-hidden">
            <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>
            <div className="">
            <h3 className="text-white text-[24px] font-bold">{name}</h3>
            <p className="text-white text-[18px]">{position}</p>
            </div>
        </div>
        <div className="mt-[30px]">
            <p className="text-white text-[18px]">{reviewText}</p>
        </div>
        <div className="mt-[30px] bg-deep-black border">
        <StarRating value={4} />
        </div>
    </div>
  )
}

export default TestimonialCard