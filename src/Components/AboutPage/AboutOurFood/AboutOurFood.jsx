import image1 from "../../../assets/resources/Rectangle 632.png";
import image2 from "../../../assets/resources/Rectangle 631.png";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import Button from "../../Shared/Button/Button";
import { FaArrowRight } from "react-icons/fa";
import { FiPhoneIncoming } from "react-icons/fi";
import Container from "../../Shared/Container/Container";
import StickerCircle from "../../Shared/StickerCircle/StickerCircle";
const AboutOurFood = () => {
  return (
    <Container>
      <div className="grid grid-cols-5 gap-8 place-items-center">
        <div className="col-span-2 relative ">
          <img src={image1} alt="Food banner" className="w-full pt-24" />
          <div className="absolute -top-0 left-10">
            <StickerCircle circleText="Best Restuarant Template by - Najatul islam ·" />
          </div>
        </div>

        <div className="relative w-full col-span-3">
          <img src={image2} alt="Chef with Food banner" className="" />
          <div className="py-10 px-12 bg-white text-deep-black space-y-3  absolute gap-4 w-2/3 bottom-0 right-0">
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
