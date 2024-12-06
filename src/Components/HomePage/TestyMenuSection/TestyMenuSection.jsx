import Container from "../../Shared/Container/Container";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";

const TestyMenuSection = () => {
  return (
    <Container>
      <div>
        {/* Section Header */}
        <div className="w-1/3 mx-auto text-center">
          <SectionHeader
            heading="Explore The Yummy Menu"
            subHeading="Testy Menu"
          />
        </div>
        {/* Menu Content */}
        <div>
            {/* left side image  */}
            <div>
                <img src="" alt="" />
            </div>

            {/* Menu Items */}
            <div></div>

            {/* right side image */}
            <div>
                <img src="" alt="" />
            </div>
        </div>
      </div>
    </Container>
  );
};

export default TestyMenuSection;
