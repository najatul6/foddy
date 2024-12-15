import { IoIosCheckmarkCircle } from "react-icons/io";
import Container from "../../Shared/Container/Container";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import Button from "../../Shared/Button/Button";

const OurBestChefs = () => {
  return (
    <Container>
      <div>
        <div>
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
          <div className="flex flex-col justify-start items-start gap-5 text-white text-2xl relative py-5 px-4">
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
          <Button />
        </div>
        <div></div>
      </div>
    </Container>
  );
};

export default OurBestChefs;
