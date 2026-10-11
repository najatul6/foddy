import {
  FaArrowRight,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import Button from "../../Shared/Button/Button";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import Rectangle680 from "../../../assets/resources/Rectangle 680.png";

const FindRestaurant = () => {
  return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* Added text-center on mobile and text-left on md devices */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full">
          <SectionHeader
            subHeading="find restaurant"
            heading="Find Your Best Restaurant in Your area"
          />
          {/* Centered the hr on mobile, left on desktop */}
          <hr className="w-1/2 md:w-1/3 border-2 rounded-full my-5 md:my-7 mx-auto md:mx-0" />
          
          {/* Scaled text sizes for mobile */}
          <div className="text-xl md:text-2xl font-medium font-cormorantGaramond w-full">
            <div className="space-y-4 md:space-y-5">
              <p>
                Merin City Tower, Albert St,
                <br className="hidden md:block" /> New York, USA
              </p>
              {/* break-all added so the long email doesn't overflow on small mobile screens */}
              <p className="break-all md:break-normal">mdnajatulislam.develop@gmail.com</p>
              <p>+880 177 382 7414</p>
            </div>
            
            {/* Added flex-wrap and responsive gap so buttons/icons don't overflow on small screens */}
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-7 mt-8 md:mt-10">
              <Button text="contact us" icon={<FaArrowRight />} withBg />
              <span className="text-xl md:text-2xl font-medium">or</span>
              
              <div className="hover:text-deep-orange text-xl md:text-2xl font-bold cursor-pointer transition-all duration-300">
                <FaFacebook />
              </div>
              <div className="hover:text-deep-orange text-xl md:text-2xl font-bold cursor-pointer transition-all duration-300">
                <FaInstagram />
              </div>
              <div className="hover:text-deep-orange text-xl md:text-2xl font-bold cursor-pointer transition-all duration-300">
                <FaTwitter />
              </div>
              <div className="hover:text-deep-orange text-xl md:text-2xl font-bold cursor-pointer transition-all duration-300">
                <FaLinkedin />
              </div>
            </div>
          </div>
        </div>
        
        {/* Added w-full so the image scales down properly on mobile */}
        <div className="w-full">
          <img src={Rectangle680} alt="Restaurant banner image" className="w-full h-auto object-cover" />
        </div>
        
      </div>
  );
};

export default FindRestaurant;