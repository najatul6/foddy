import Container from "../../Shared/Container/Container";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import icon1 from "../../../assets/Icons/fi_1609988.png";
import icon2 from "../../../assets/Icons/fi_9876646.png";
import icon3 from "../../../assets/Icons/fi_4785856.png";
import icon4 from "../../../assets/Icons/fi_3655608.png";

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
        <div>
          <div>
            <img src={icon1} alt="Services icons here" />
          </div>
          <div>
            <img src={icon2} alt="Services icons here" />
          </div>
          <div>
            <img src={icon3} alt="Services icons here" />
          </div>
          <div>
            <img src={icon4} alt="Services icons here" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PopularServiceSection;
