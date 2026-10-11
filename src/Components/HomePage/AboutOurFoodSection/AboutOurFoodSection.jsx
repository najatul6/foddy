import Container from "../../Shared/Container/Container";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const AboutOurFoodSection = () => {
  return (
    <Container>
      <div className="py-10 md:py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
        <LeftSection />
        <RightSection />
      </div>
    </Container>
  );
};

export default AboutOurFoodSection;