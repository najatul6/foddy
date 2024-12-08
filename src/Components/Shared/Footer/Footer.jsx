import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Container from "../Container/Container";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="border-t-[0.3px] mt-[20px] bg-deep-black pt-[60px] text-white">
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
          <div className="grid grid-cols-4 gap-4 mt-10">
            <div className="space-y-5">
              <h5 className="text-5xl font-medium ">
                F<span className="text-deep-orange">odd</span>y
              </h5>
              <p className="text-lg  tracking-[0.5px]">
                Our menu is a celebration of flavors from around the world,
                crafted with care and creativity by our talented.
              </p>
              <div className="flex justify-start items-center gap-[30px] cursor-pointer duration-300">
                <div className="hover:text-deep-orange text-2xl font-bold">
                  <FaFacebook />
                </div>
                <div className="hover:text-deep-orange text-2xl font-bold cursor-pointer duration-300">
                  <FaInstagram />
                </div>
                <div className="hover:text-deep-orange text-2xl font-bold cursor-pointer duration-300">
                  <FaTwitter />
                </div>
                <div className="hover:text-deep-orange text-2xl font-bold cursor-pointer duration-300">
                  <FaLinkedin />
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h6 className="text-3xl font-bold font-cormorantGaramond">
                Quick Links
              </h6>
              <div className="flex flex-col justify-center items-start gap-5 text-2xl font-medium font-cormorantGaramond opacity-[0.8]">
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
              <div className="flex flex-col justify-center items-start gap-5 text-2xl font-medium font-cormorantGaramond  opacity-[0.8]">
                <Link>Fast-food</Link>
                <Link>Italian Food</Link>
                <Link>Thai Food</Link>
                <Link>Bengali Foods</Link>
                <Link>Chef&rsquo;s Details</Link>
              </div>
            </div>
            <div className="space-y-6 ">
              <h6 className="text-3xl font-bold font-cormorantGaramond">
                Contact Us
              </h6>
              <div className="flex flex-col justify-center items-start gap-5 text-2xl font-medium font-cormorantGaramond  w-full break-words opacity-[0.8]">
                <p>Merin City Tower, Albert St, New York, USA</p>
                <p>+880 177 382 7414</p>
                <p className="break-all">mdnajatulislam.develop@gmail.com</p>
              </div>
            </div>
          </div>
          <hr className="border-[0.3px] border-white my-5" />
          <div className="text-2xl font-medium font-cormorantGaramond flex justify-between items-center px-2 pb-4">
            <p>Copyright &copy;foody 2024 | All Right Reserved</p>
            <p>
              Developed By -{" "}
              <Link
                to="https://www.najatulislam.me/"
                target="_blank"
                className="text-deep-orange underline"
              >
                Najatul Islam
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
