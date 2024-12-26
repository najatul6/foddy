import { IoIosCheckmarkCircle } from "react-icons/io";
import Container from "../../Shared/Container/Container";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import Button from "../../Shared/Button/Button";
import { FaArrowRight } from "react-icons/fa6";
import image1 from "../../../assets/resources/Rectangle 638 (1).png";
import image2 from "../../../assets/resources/Rectangle 639.png";
import image3 from "../../../assets/resources/Rectangle 640.png";
import image4 from "../../../assets/resources/Rectangle 641.png";

const OurBestChefs = () => {
  return (
    <Container>
      <div className="flex justify-center items-center gap-10">
        <div className="space-y-[30px]">
          <div className="w-1/3 text-left">
            <SectionHeader
              heading={"Meet Our Exclusive & Master Chef’s"}
              subHeading={"OUR best chef’s"}
            />
          </div>
          <p className="text-white ">
            The format typically involves contestants facing a series of
            challenges, including mystery box challenges, invention tests, team
            challenges, and elimination rounds. They are judged by a panel of
            professional.
          </p>
          <div className="flex flex-col justify-start items-start gap-5 text-white text-2xl relative py-5 px-4 ml-[30px]">
            {/* Border Styling */}
            <div className="absolute inset-0 border-l border-deep-orange"></div>
            <div className="absolute top-0 left-0 w-1/5 border-t border-deep-orange"></div>
            <div className="absolute bottom-0 left-0 w-1/5 border-b border-deep-orange"></div>

            {/* Content */}
            <p className="font-cormorantGaramond flex justify-center items-center gap-[10px] relative z-10">
              <IoIosCheckmarkCircle /> 15 years Experience in Restaurant
              Chef&rsquo;s in London
            </p>
            <p className="font-cormorantGaramond flex justify-center items-center gap-[10px] relative z-10">
              <IoIosCheckmarkCircle /> Any Kind Of Food Made Yummy & Testy Food
            </p>
          </div>
          <Button text="Become a chef’s" icon={<FaArrowRight />} withOutbg />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <img src={image1} alt="Chef Profile picture" />
          <img src={image2} alt="Chef Profile picture" />
          <img src={image3} alt="Chef Profile picture" />
          <img src={image4} alt="Chef Profile picture" />
        </div>
      </div>
    </Container>
  );
};

export default OurBestChefs;
