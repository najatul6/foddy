import Container from "../../Shared/Container/Container";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";

const PopularServiceSection = () => {
  return (
    <div className="bg-white bg-opacity-[0.05] py-[120px] mt-[120px]">
      <Container>
        <div className="flex justify-between items-center">
          <div className="w-full">
            <SectionHeader
              heading="Best Category Foods Menu"
              subHeading="Our Popular SERVICES"
            />
          </div>
          <p>
            Our menu is a celebration of flavors from around the world, crafted
            with care and creativity by our talented team of chefs. From
            desserts, each dish is a masterpiece
          </p>
        </div>
      </Container>
    </div>
  );
};

export default PopularServiceSection;
