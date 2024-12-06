import Container from "../../Shared/Container/Container";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";

const TestyMenuSection = () => {
  return (
    <Container>
      <div>
        <div className="w-1/3 mx-auto text-center">
          {" "}
          <SectionHeader
            heading="Explore The Yummy Menu"
            subHeading="Testy Menu"
          />
        </div>
      </div>
    </Container>
  );
};

export default TestyMenuSection;
