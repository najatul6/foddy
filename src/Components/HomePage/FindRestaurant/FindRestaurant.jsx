import { FaArrowRight, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Button from "../../Shared/Button/Button";
import Container from "../../Shared/Container/Container";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";

const FindRestaurant = () => {
  return (
    <Container>
      <div className="mt-[120px]">
        <SectionHeader
          subHeading="find restaurant"
          heading="Find Your Best Restaurant in Your area"
        />
        <hr className="w-1/3 border-2 rounded-full my-7"/>
        <div className="text-2xl font-medium space-y-5 font-cormorantGaramond">
          <p>Merin City Tower, Albert St,<br /> New York, USA</p>
          <p>mdnajatulislam.develop@gmail.com</p>
          <p>+880 177 382 7414</p>
          <div className="flex justify-start items-center gap-7">
            <Button text="contact us" icon={<FaArrowRight/>} />
            <span className="text-2xl font-medium">or</span>
            <div className="hover:text-deep-orange text-2xl font-bold">
                <FaFacebook/>
            </div>
            <div className="hover:text-deep-orange text-2xl font-bold">
                <FaInstagram/>
            </div>
            <div className="hover:text-deep-orange text-2xl font-bold">
                <FaTwitter/>
            </div>
            <div className="hover:text-deep-orange text-2xl font-bold">
                <FaLinkedin/>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FindRestaurant;
