import Container from "../../Shared/Container/Container";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import icon1 from "../../../assets/Icons/fi_1609988.png";
import icon2 from "../../../assets/Icons/fi_9876646.png";
import icon3 from "../../../assets/Icons/fi_4785856.png";
import icon4 from "../../../assets/Icons/fi_3655608.png";
import { FaArrowRight } from "react-icons/fa";

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
          <div className="bg-deep-black p-[30px] border border-deep-orange space-y-5">
            <img src={icon1} alt="Services icons here" />
            <div className="flex flex-col gap-2">
              <h6 className="text-3xl font-cormorantGaramond font-bold capitalize">Special Foods</h6>
              <p className="opacity-[0.7]">celebration of flavors from around the world, crafted </p>
            </div>
            <button className="flex justify-center items-center gap-2 text-xl font-cormorantGaramond">Learn More <FaArrowRight/></button>
          </div>
          <div className="bg-deep-black p-[30px] border border-deep-orange space-y-5">
            <img src={icon2} alt="Services icons here" />
             <div className="flex flex-col gap-2">
              <h6 className="text-3xl font-cormorantGaramond font-bold capitalize">Special Foods</h6>
              <p className="opacity-[0.7]">celebration of flavors from around the world, crafted </p>
            </div>
            <button className="flex justify-center items-center gap-2 text-xl font-cormorantGaramond">Learn More <FaArrowRight/></button>
          </div>
          <div className="bg-deep-black p-[30px] border border-deep-orange space-y-5">
            <img src={icon3} alt="Services icons here" />
             <div className="flex flex-col gap-2">
              <h6 className="text-3xl font-cormorantGaramond font-bold capitalize">Special Foods</h6>
              <p className="opacity-[0.7]">celebration of flavors from around the world, crafted </p>
            </div>
            <button className="flex justify-center items-center gap-2 text-xl font-cormorantGaramond">Learn More <FaArrowRight/></button>
          </div>
          <div className="bg-deep-black p-[30px] border border-deep-orange space-y-5">
            <img src={icon4} alt="Services icons here" />
             <div className="flex flex-col gap-2">
              <h6 className="text-3xl font-cormorantGaramond font-bold capitalize">Special Foods</h6>
              <p className="opacity-[0.7]">celebration of flavors from around the world, crafted </p>
            </div>
            <button className="flex justify-center items-center gap-2 text-xl font-cormorantGaramond">Learn More <FaArrowRight/></button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PopularServiceSection;
