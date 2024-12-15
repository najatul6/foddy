import Container from "../../Shared/Container/Container";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";


const AboutOurFoodSection = () => {
  return (
    <Container>
      <div className="grid grid-cols-2 gap-5 place-items-center">
        <LeftSection />
        <RightSection />
      </div>
    </Container>
  );
};

export default AboutOurFoodSection;
