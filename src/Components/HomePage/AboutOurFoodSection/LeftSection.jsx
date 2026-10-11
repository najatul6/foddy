import Rectangle654 from "../../../assets/resources/Rectangle 654.png";
import Rectangle655 from "../../../assets/resources/Rectangle 655.png";
import Rectangle656 from "../../../assets/resources/Rectangle 656.png";

const LeftSection = () => {
  return (
    <div className="w-full h-full flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6">
      
      {/* 1st Column */}
      <div className="grid grid-cols-1 h-full gap-4 md:gap-6 w-full">
        <div className="h-full w-full">
          <img src={Rectangle654} alt="Food Image" className="w-full h-full object-cover" />
        </div>

        <div className="font-cormorantGaramond flex flex-col w-full h-full py-3 md:py-5 justify-center items-center sm:items-end text-center sm:text-right">
          <h1 className="text-2xl md:text-3xl font-bold">OPENING HRS</h1>
          <p className="font-light text-sm md:text-base">Monday - Saturday | 8.00 am to 11.00 pm</p>
          <p className="font-light text-sm md:text-base">Sunday | 10.00 am to 11.45 pm</p>
        </div>
      </div>

      {/* 2nd Column */}
      <div className="grid grid-cols-1 h-full gap-4 md:gap-6 w-full">
        <img src={Rectangle655} alt="Food Image" className="w-full h-full object-cover" />
        <img src={Rectangle656} alt="Food Image" className="w-full h-full object-cover" />
      </div>
      
    </div>
  );
};

export default LeftSection;