import Rectangle654 from "../../../assets/resources/Rectangle 654.png";
import Rectangle655 from "../../../assets/resources/Rectangle 655.png";
import Rectangle656 from "../../../assets/resources/Rectangle 656.png";
const LeftSection = () => {
  return (
    <div className="w-full h-full flex justify-center items-center gap-6">
      <div className="grid grid-cols-1 h-full gap-6 w-full">
        <div className="h-full w-full">
        <img src={Rectangle654} alt="" className="w-full h-full" />
        </div>

        <div className="font-cormorantGaramond flex flex-col  w-full h-full py-5 justify-center items-end">
          <h1 className="text-3xl font-bold">OPENING HRS</h1>
          <p className="font-light">Monday - Saturday | 8.00 am to 11.00 pm</p>
          <p className="font-light">Sunday | 10.00 am to 11.45 pm</p>
        </div>
      </div>
      <div className="grid grid-cols-1 h-full gap-6 w-full">
        <img src={Rectangle655} alt="" className="w-full " />

        <img src={Rectangle656} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default LeftSection;
