import { IoIosCheckmarkCircle } from "react-icons/io";
import Container from "../../Shared/Container/Container";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";

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
          <p>
            The format typically involves contestants facing a series of
            challenges, including mystery box challenges, invention tests, team
            challenges, and elimination rounds. They are judged by a panel of
            professional.
          </p>
          <div>
            <p>
              <IoIosCheckmarkCircle /> 15 years Experience in Restaurant
              Chef&rsquo;s in London
            </p>
            <p>
              <IoIosCheckmarkCircle /> Any Kind Of Food Made Yummy & Testy Food
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </Container>
  );
};

export default OurBestChefs;
