import { FaArrowRight } from "react-icons/fa";
import image1 from "../../../assets/resources/Rectangle 560.png";
import Button from "../Button/Button";
import PropTypes from "prop-types";
import Container from "../Container/Container";
const Banner = ({ heading, subHeading }) => {
  return (
    <>
      <div className="relative">
        <img src={image1} alt="Food banner" className="w-full object-cover" />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <Container>
           <div className="text-white flex flex-col justify-center items-center text-center w-4/5 mx-auto gap-6">
           <h1 className="text-7xl font-cormorantGaramond">{heading}</h1>
            <p className="opacity-[0.9]">{subHeading}</p>
            <div className="flex justify-center items-center">
              <Button text="View Our Menu" icon={<FaArrowRight />} withBg />
            </div>
           </div>
          </Container>
        </div>
      </div>
    </>
  );
};

Banner.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
};

export default Banner;
