
const TestimonialCard = ({review}) => {
    const {name, position, image, review:reviewText, rating} = review
  return (
    <div>
        <div className="flex items-center justify-center">
            <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
            <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>
            <div className="ml-[30px]">
            <h3 className="text-white text-[24px] font-bold">{name}</h3>
            <p className="text-white text-[18px]">{position}</p>
            </div>
        </div>
        <div className="mt-[30px]">
            <p className="text-white text-[18px]">{reviewText}</p>
        </div>
        <div className="mt-[30px]">
            <p className="text-white text-[18px]">Rating: {rating}</p>
        </div>
    </div>
  )
}

export default TestimonialCard