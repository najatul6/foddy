import Container from "../../Shared/Container/Container";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import image1 from "../../../assets/resources/Rectangle 642.png";
import image2 from "../../../assets/resources/Rectangle 661.png";
import image3 from "../../../assets/resources/Rectangle 660.png";
import image4 from "../../../assets/resources/Rectangle 663.png";
import { FaSearch } from "react-icons/fa";
import Button from "../../Shared/Button/Button";

const OurFoodShowcase = () => {
  return (
    <Container>
      <div className="flex justify-center items-center flex-col">
        <SectionHeader heading="Our Food Showcase" subHeading="FOOD ITEMS" />
        <p className="text-white text-center w-1/3 mx-auto mt-5">
          Our menu is a celebration of flavors from around the world, crafted
          with care and creativity
        </p>
      </div>
      <div className="grid grid-cols-4 place-items-center gap-6 mt-10">
        <div className="w-full flex flex-col justify-center items-center gap-6 group relative cursor-pointer">
          <img src={image1} alt="bengali food" className="w-full h-[250px]" />
          <div className="absolute flex-col  hidden group-hover:flex duration-300 transition-all justify-center items-center border-2 border-white border-dashed w-11/12 h-5/6">
            <div className="bg-white p-2 rounded-full">
              <FaSearch size={30} className="text-deep-orange" />
            </div>
            <h1 className="text-2xl font-bold font-cormorantGaramond text-white">
              Italian Chicken Grilled
            </h1>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-6 group relative cursor-pointer">
          <img src={image2} alt="bengali food" className="w-full h-[250px]" />
          <div className="absolute flex-col  hidden group-hover:flex duration-300 transition-all justify-center items-center border-2 border-white border-dashed w-11/12 h-5/6">
            <div className="bg-white p-2 rounded-full">
              <FaSearch size={30} className="text-deep-orange" />
            </div>
            <h1 className="text-2xl font-bold font-cormorantGaramond text-white">
              Italian Chicken Grilled
            </h1>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-6 group relative cursor-pointer">
          <img src={image3} alt="bengali food" className="w-full h-[250px]" />
          <div className="absolute flex-col  hidden group-hover:flex duration-300 transition-all justify-center items-center border-2 border-white border-dashed w-11/12 h-5/6">
            <div className="bg-white p-2 rounded-full">
              <FaSearch size={30} className="text-deep-orange" />
            </div>
            <h1 className="text-2xl font-bold font-cormorantGaramond text-white">
              Italian Chicken Grilled
            </h1>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-6 group relative cursor-pointer">
          <img src={image4} alt="bengali food" className="w-full h-[250px]" />
          <div className="absolute flex-col  hidden group-hover:flex duration-300 transition-all justify-center items-center border-2 border-white border-dashed w-11/12 h-5/6">
            <div className="bg-white p-2 rounded-full">
              <FaSearch size={30} className="text-deep-orange" />
            </div>
            <h1 className="text-2xl font-bold font-cormorantGaramond text-white">
              Italian Chicken Grilled
            </h1>
          </div>
        </div>
      </div>
      <Button text="View All" />
    </Container>
  );
};

export default OurFoodShowcase;
