import { FaArrowRight } from "react-icons/fa";
import { recipes } from "../../../utils/recipes";
import Button from "../../Shared/Button/Button";
import FoodCard from "../../Shared/FoodCard/FoodCard";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import banner from "../../../assets/resources/Rectangle 5.png";
import Container from "../../Shared/Container/Container";

const BestFoodMenu = () => {
  const yummyMenu = recipes?.slice(0, 4);
  return (
    <Container>
      <div className="flex justify-center items-center gap-14">
        <div>
          <SectionHeader
            subHeading="Best Food Menu"
            heading="Choose Your Best Menu&rsquo;s"
          />
          {/* Menu Items */}
          <div className="w-full flex flex-col gap-10 text-white">
            {yummyMenu?.map((recipe, index) => (
              <FoodCard
                key={index}
                name={recipe?.name}
                image={recipe?.image}
                price={recipe?.price}
                recipe={recipe?.recipe}
              />
            ))}
          </div>
          <div className="flex justify-center items-center">
            <Button text="About More" icon={<FaArrowRight />} />
          </div>
        </div>
        <img src={banner} alt="Yummy Foods Banner" />
      </div>
    </Container>
  );
};

export default BestFoodMenu;
