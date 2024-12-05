import { FaArrowRight, FaFacebook } from "react-icons/fa";
import Button from "../../Shared/Button/Button";
import Container from "../../Shared/Container/Container";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";

const FindRestaurant = () => {
  return (
    <Container>
      <div>
        <SectionHeader
          subHeading="find restaurant"
          heading="Find Your Best Restaurant in Your area"
        />
        <div>
          <p>Merin City Tower, Albert St, New York, USA</p>
          <p>mdnajatulislam.develop@gmail.com</p>
          <p>+880 177 382 7414</p>
          <div>
            <Button text="contact us" icon={<FaArrowRight/>} />
            <span>or</span>
            <div>
                <FaFacebook/>
            </div>
            <div>
                <FaFacebook/>
            </div>
            <div>
                <FaFacebook/>
            </div>
            <div>
                <FaFacebook/>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FindRestaurant;
