import Container from "../../Shared/Container/Container";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import leftSideImg from "../../../assets/resources/Rectangle 692.png";
import rightSideImg from "../../../assets/resources/Rectangle 693.png";
import FoodCard from "../../Shared/FoodCard/FoodCard";
import { recipes } from "../../../utils/recipes";
import Button from "../../Shared/Button/Button";
import { FaArrowRight } from "react-icons/fa";

const TestyMenuSection = () => {
  const yummyMenu = recipes?.slice(0, 4);
  return (
    <Container>
      {/* Section Header */}
      <div className="w-full md:w-2/3 lg:w-1/3 mx-auto text-center mb-8 md:mb-12">
        <SectionHeader
          heading="Explore The Yummy Menu"
          subHeading="Testy Menu"
        />
      </div>
      
      {/* Menu Content */}
      <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-8 md:gap-10 mb-10">
        
        {/* left side image */}
        <img 
          src={leftSideImg} 
          alt="Food Related Image" 
          className="w-full md:w-[70%] lg:w-auto object-cover"
        />

        {/* Menu Items */}
        <div className="w-full flex flex-col gap-6 md:gap-10">
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

        {/* right side image */}
        <img 
          src={rightSideImg} 
          alt="Food Related Image" 
          className="w-full md:w-[70%] lg:w-auto object-cover"
        />
      </div>
      
      <div className="flex justify-center items-center">
        <Button text="About More" icon={<FaArrowRight />} withBg />
      </div>
    </Container>
  );
};

export default TestyMenuSection;