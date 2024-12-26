import Container from "../../Shared/Container/Container";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import image1 from "../../../assets/resources/Rectangle 642.png"
import image2 from "../../../assets/resources/Rectangle 661.png"
import image3 from "../../../assets/resources/Rectangle 660.png"
import image4 from "../../../assets/resources/Rectangle 663.png"

const OurFoodShowcase = () => {
  return (
    <Container>
      <div className="flex justify-center items-center flex-col">
        <SectionHeader heading="Our Food Showcase" subHeading="FOOD ITEMS" />
        <p className="text-white text-center w-1/3 mx-auto mt-5">
          Our menu is a celebration of flavors from around the world, crafted
          with care and creativity
        </p>
      </div>

    </Container>
  );
};

export default OurFoodShowcase;
