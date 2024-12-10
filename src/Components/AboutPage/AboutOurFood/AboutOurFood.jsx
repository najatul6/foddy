import image1 from "../../../assets/resources/Rectangle 632.png";
import image2 from "../../../assets/resources/Rectangle 631.png";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import Button from "../../Shared/Button/Button";
import { FaArrowRight } from "react-icons/fa";
import { FiPhoneIncoming } from "react-icons/fi";
import Container from "../../Shared/Container/Container";
const AboutOurFood = () => {
  return (
    <Container>
      <div className="flex justify-center items-center gap-8">
        <img src={image1} alt="Food banner" />
        <div className="">
          <img src={image2} alt="Chef with Food banner" />
          <div className="py-10 px-12 bg-white text-deep-black flex flex-col justify-center items-start gap-4 w-2/3 space-y-3">
            <SectionHeader
              heading="The Best Delicious Food Made From Us"
              subHeading="About Our Food"
              black={"black"}
            />
            <p>
              Our menu is a celebration of flavors from around the world,
              crafted with care and creativity by our talented team of chefs.
              From savory appetizers to decadent desserts, each dish is a
              masterpiece
            </p>
            <div className="flex justify-start items-center gap-5">
              <Button text="About More" icon={<FaArrowRight />} />
              <div className=" flex justify-center items-center gap-5">
                <div className="w-10 h-10 rounded-full bg-deep-orange bg-opacity-[10%] p-[10px]">
                  <FiPhoneIncoming size={20} className="text-deep-orange" />
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
    </Container>
  );
};

export default AboutOurFood;
