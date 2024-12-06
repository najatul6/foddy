import Container from "../../Shared/Container/Container";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import leftSideImg from "../../../assets/resources/Rectangle 692.png"
import rightSideImg from "../../../assets/resources/Rectangle 693.png"
import FoodCard from "../../Shared/FoodCard/FoodCard";
import { recipes } from "../../../utils/recipes";
import Button from "../../Shared/Button/Button";
import { FaArrowRight } from "react-icons/fa";

const TestyMenuSection = () => {
    const yummyMenu = recipes?.slice(0,4);
    console.log(yummyMenu);
  return (
    <Container>
      <div className="mt-[120px]">
        {/* Section Header */}
        <div className="w-1/3 mx-auto text-center">
          <SectionHeader
            heading="Explore The Yummy Menu"
            subHeading="Testy Menu"
          />
        </div>
        {/* Menu Content */}
        <div className="flex justify-center items-center w-full gap-10 mb-10">
            {/* left side image  */}
                <img src={leftSideImg} alt="Food Related Image" />

            {/* Menu Items */}
            <div className="w-full flex flex-col gap-10">
                {
                    yummyMenu?.map((recipe, index) => (
                        <FoodCard key={index} name={recipe?.name} image={recipe?.image} price={recipe?.price} recipe={recipe?.recipe} />
                    ))
                }
            </div>

            {/* right side image */}
                <img src={rightSideImg} alt="Food Related Image" />
        </div>
        <div className="flex justify-center items-center">
        <Button text="About More" icon={<FaArrowRight/>} />
        </div>
      </div>
    </Container>
  );
};

export default TestyMenuSection;
