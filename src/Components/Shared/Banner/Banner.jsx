import { FaArrowRight } from "react-icons/fa";
import image1 from "../../../assets/resources/Rectangle 560.png";
import Button from "../Button/Button";
const Banner = () => {
  return (
    <div className="">
      <div className="relative">
        <img src={image1} alt="Food banner" className="w-full object-cover" />
        <div className="absolute inset-0 text-white flex flex-col justify-center items-center text-center w-4/5 mx-auto">
          <h1 className="text-7xl font-cormorantGaramond">
            An Epicurean Adventure Awaits Reserve Your Table Today
          </h1>
          <p className="opacity-[0.9]">
            Our menu is a celebration of flavors from around the world, crafted
            with care and creativity by our talented team of chefs. From savory
            appetizers to decadent desserts, each dish is a masterpiece
          </p>
          <div className="flex justify-center items-center">
            <Button text="View Our Menu" icon={<FaArrowRight />} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
