import PropTypes from "prop-types";

const FoodCard = ({ name, image, price, recipe, type, category }) => {
  return (
    <div className="flex justify-center items-center gap-5 w-full">
      <div className="w-[76px] h-[68px] overflow-hidden rounded-md">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="w-full">
        <div className="flex justify-between items-center gap-2 w-full">
          <h4 className="text-2xl font-cormorantGaramond font-bold flex justify-start text-nowrap">
            {name}
          </h4>
          <p className="border-b-2 border-dashed w-full text-right ">{price}</p>
        </div>
        {recipe && <p className="opacity-[0.6]">{recipe}</p>}
        <div className="flex justify-between items-center">
          {type && <p className="opacity-[0.6]">{type}</p>}
          {category && (
            <p className="font-cormorantGaramond text-xs uppercase px-[10px] py-2 bg-deep-orange">
              {category}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

FoodCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string,
  recipe: PropTypes.string,
  type: PropTypes.string,
  category: PropTypes.string,
};

export default FoodCard;
