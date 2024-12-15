import {
  FaArrowRight,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import Button from "../../Shared/Button/Button";
import Container from "../../Shared/Container/Container";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import Rectangle680 from "../../../assets/resources/Rectangle 680.png";

const FindRestaurant = () => {
  return (
    <Container>
      <div className="grid grid-cols-2 place-items-center">
        <div>
          <SectionHeader
            subHeading="find restaurant"
            heading="Find Your Best Restaurant in Your area"
          />
          <hr className="w-1/3 border-2 rounded-full my-7" />
          <div className="text-2xl font-medium  font-cormorantGaramond">
            <div className="space-y-5">
              <p>
                Merin City Tower, Albert St,
                <br /> New York, USA
              </p>
              <p>mdnajatulislam.develop@gmail.com</p>
              <p>+880 177 382 7414</p>
            </div>
            <div className="flex justify-start items-center gap-7 mt-10">
              <Button text="contact us" icon={<FaArrowRight />} withBg />
              <span className="text-2xl font-medium">or</span>
              <div className="hover:text-deep-orange text-2xl font-bold">
                <FaFacebook />
              </div>
              <div className="hover:text-deep-orange text-2xl font-bold">
                <FaInstagram />
              </div>
              <div className="hover:text-deep-orange text-2xl font-bold">
                <FaTwitter />
              </div>
              <div className="hover:text-deep-orange text-2xl font-bold">
                <FaLinkedin />
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={Rectangle680} alt="Restaurant banner image" />
        </div>
      </div>
    </Container>
  );
};

export default FindRestaurant;
