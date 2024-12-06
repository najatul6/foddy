import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Container from "../Container/Container";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="border-t-[0.3px] mt-[120px] bg-deep-black pt-[60px] text-white">
      <Container>
        <div className="px-4">
          <div className="flex justify-center items-center gap-14">
            <h1 className="text-5xl font-cormorantGaramond font-bold text-white">
              Subscribe For Daily Update
            </h1>
            <div className="flex justify-center items-center">
              <input
                type="email"
                name="email"
                id=""
                placeholder="Enter email address"
                className="bg-[#3C3C3C] bg-opacity-[0.51] px-5 py-2 placeholder:opacity-[0.5] text-2xl text-white focus:outline-none"
              />
              <button className="bg-deep-orange px-5 py-2 font-cormorantGaramond font-medium text-white text-2xl">
                Subscribe Now
              </button>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 border">
            <div className="space-y-5">
              <h5 className="text-5xl font-medium ">Foody</h5>
              <p className="text-lg  tracking-[0.5px]">
                Our menu is a celebration of flavors from around the world,
                crafted with care and creativity by our talented.
              </p>
              <div className="flex justify-start items-center gap-[30px]">
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
            <div className="space-y-6">
              <h6 className="text-3xl font-bold font-cormorantGaramond">
                Quick Links
              </h6>
              <div className="flex flex-col justify-center items-start gap-5 text-2xl font-medium font-cormorantGaramond">
                <Link>Home</Link>
                <Link>Our Menu</Link>
                <Link>Reservation</Link>
                <Link>About Us</Link>
                <Link>Chef&rsquo;s Details</Link>
              </div>
            </div>
            <div className="space-y-6">
              <h6 className="text-3xl font-bold font-cormorantGaramond">
                Food Menu
              </h6>
              <div className="flex flex-col justify-center items-start gap-5 text-2xl font-medium font-cormorantGaramond ">
                <Link>Fast-food</Link>
                <Link>Italian Food</Link>
                <Link>Thai Food</Link>
                <Link>Bengali Foods</Link>
                <Link>Chef&rsquo;s Details</Link>
              </div>
            </div>
            <div className="space-y-6 border">
              <h6 className="text-3xl font-bold font-cormorantGaramond">
                Contact Us
              </h6>
              <div className="flex flex-col justify-center items-start gap-5 text-2xl font-medium font-cormorantGaramond border w-full break-words">
                <p>Merin City Tower, Albert St, New York, USA</p>
                <p>+880 177 382 7414</p>
                <p className="break-all">mdnajatulislam.develop@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
