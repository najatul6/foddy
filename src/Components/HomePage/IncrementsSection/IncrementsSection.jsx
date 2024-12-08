import Rectangle675 from "../../../assets/resources/Rectangle 675.png";
import Rectangle674 from "../../../assets/resources/Rectangle 674.png";
import Container from "../../Shared/Container/Container";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
const IncrementsSection = () => {
  return (
    <Container>
      <div className="-space-y-48 mt-[120px]">
        {/* box 1 */}
        <div className="grid grid-cols-2">
          <img src={Rectangle675} alt={"Shape Picture"} className="z-[100]" />
          <div>
            <SectionHeader
              heading="It's always a good idea to drink of coffee in the mornings and at night, too. It makes mornings better and nights longer."
              subHeading="Increments"
            />
            <p className="font-cormorantGaramond text-3xl font-bold mt-10">
              * How to Process Special a Cup of Coffee
            </p>
            <div className="flex justify-start items-center gap-10 mt-10">
              <ul className="flex flex-col gap-[30px] list-disc pl-8 border-l-4 border-deep-orange text-2xl font-cormorantGaramond font-medium ">
                <li>Select Your Coffee Beans</li>
                <li>Grind Your Coffee Beans</li>
                <li>Brewing Method</li>
                <li>Measure Your Coffee</li>
              </ul>
              <div className="flex justify-center items-center gap-2">
                <hr className="h-[70px] w-1 bg-white border-white border  rotate-45" />
                <hr className="h-[70px] w-1 bg-white border-white border  rotate-45" />
              </div>
              <ul className="flex flex-col gap-[30px] list-disc pl-8 border-l-4 border-deep-orange text-2xl font-cormorantGaramond font-medium ">
                <li>Select Your Coffee Beans</li>
                <li>Grind Your Coffee Beans</li>
                <li>Brewing Method</li>
                <li>Measure Your Coffee</li>
              </ul>
            </div>
          </div>
        </div>
        {/* box 2  */}
        <div className="flex justify-center items-center">
          <p className="text-2xl  capitalize w-2/3 mt-auto p-4 text-justify ">
            Indulge in the comforting warmth and invigorating aroma that only a
            perfect cup of coffee can bring. At Bouffe, we believe in making
            every morning brighter and
          </p>
          <img src={Rectangle674} alt="Coffee image" className="" />
        </div>
      </div>
    </Container>
  );
};

export default IncrementsSection;
