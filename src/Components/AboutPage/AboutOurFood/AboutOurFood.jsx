import image1 from "../../../assets/resources/Rectangle 632.png";
import image2 from "../../../assets/resources/Rectangle 631.png";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import Button from "../../Shared/Button/Button";
import { FaArrowRight } from "react-icons/fa";
import { FiPhoneIncoming } from "react-icons/fi";
const AboutOurFood = () => {
  return (
    <div>
      <img src={image1} alt="Food banner" className="w-full" />
      <div>
        <img src={image2} alt="Chef with Food banner" className="w-full" />
        <div className="py-10 px-12 bg-white">
          <SectionHeader
            heading="The Best Delicious Food Made From Us"
            subHeading="About Our Food"
          />
          <p>
            Our menu is a celebration of flavors from around the world, crafted
            with care and creativity by our talented team of chefs. From savory
            appetizers to decadent desserts, each dish is a masterpiece
          </p>
          <div>
            <Button text="About More" icon={<FaArrowRight />} />
            <div>
              <div className="w-10 h-10 rounded-full bg-deep-orange bg-opacity-[10%] p-[10px]">
                <FiPhoneIncoming  size={20}  className="text-deep-orange"/>
              </div>
              <div>
                <p className="text-xs opacity-[0.6]">Call For Order</p>
                <h6 className="font-medium">+8801773827414</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOurFood;
