import Container from "../../Shared/Container/Container";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import leftSideImg from "../../../assets/resources/Rectangle 692.png"
import rightSideImg from "../../../assets/resources/Rectangle 693.png"
import FoodCard from "../../Shared/FoodCard/FoodCard";

const TestyMenuSection = () => {
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
        <div className="flex justify-between gap-10">
            {/* left side image  */}
            <div>
                <img src={leftSideImg} alt="Food Related Image" />
            </div>

            {/* Menu Items */}
            <div>
                <FoodCard />
            </div>

            {/* right side image */}
            <div>
                <img src={rightSideImg} alt="Food Related Image" />
            </div>
        </div>
      </div>
    </Container>
  );
};

export default TestyMenuSection;
