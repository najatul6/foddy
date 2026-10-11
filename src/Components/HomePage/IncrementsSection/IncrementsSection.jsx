import Rectangle675 from "../../../assets/resources/Rectangle 675.png";
import Rectangle674 from "../../../assets/resources/Rectangle 674.png";
import Container from "../../Shared/Container/Container";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";

const IncrementsSection = () => {
  return (
    <Container>
      <div className="flex flex-col gap-10 md:gap-0 md:block md:-space-y-48">
        
        {/* box 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 place-items-center">
          <img src={Rectangle675} alt={"Shape Picture"} className="w-full md:w-auto z-10 md:z-[100]" />
          
          <div className="w-full px-4 md:px-0">
            <SectionHeader
              heading="It's always a good idea to drink of coffee in the mornings and at night, too. It makes mornings better and nights longer."
              subHeading="Increments"
            />
            <p className="font-cormorantGaramond text-2xl md:text-3xl font-bold mt-6 md:mt-10">
              * How to Process Special a Cup of Coffee
            </p>
            
            <div className="flex flex-col md:flex-row justify-start items-start md:items-center gap-6 md:gap-10 mt-6 md:mt-10">
              <ul className="flex flex-col gap-4 md:gap-[30px] list-disc pl-8 border-l-4 border-deep-orange text-xl md:text-2xl font-cormorantGaramond font-medium">
                <li>Select Your Coffee Beans</li>
                <li>Grind Your Coffee Beans</li>
                <li>Brewing Method</li>
                <li>Measure Your Coffee</li>
              </ul>
              
              <div className="hidden md:flex justify-center items-center gap-2">
                <hr className="h-[70px] w-1 bg-white border-white border rotate-45" />
                <hr className="h-[70px] w-1 bg-white border-white border rotate-45" />
              </div>
              
              <ul className="flex flex-col gap-4 md:gap-[30px] list-disc pl-8 border-l-4 border-deep-orange text-xl md:text-2xl font-cormorantGaramond font-medium">
                <li>Select Your Coffee Beans</li>
                <li>Grind Your Coffee Beans</li>
                <li>Brewing Method</li>
                <li>Measure Your Coffee</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* box 2  */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-0 relative z-0">
          <p className="text-xl md:text-2xl capitalize w-full md:w-2/3 mt-0 md:mt-auto p-4 text-center md:text-justify">
            Indulge in the comforting warmth and invigorating aroma that only a
            perfect cup of coffee can bring. At Bouffe, we believe in making
            every morning brighter and
          </p>
          <img src={Rectangle674} alt="Coffee image" className="w-full md:w-auto object-cover" />
        </div>
      </div>
    </Container>
  );
};

export default IncrementsSection;