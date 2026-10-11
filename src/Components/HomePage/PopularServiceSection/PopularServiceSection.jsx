import Container from "../../Shared/Container/Container";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import icon1 from "../../../assets/Icons/fi_1609988.png";
import icon2 from "../../../assets/Icons/fi_9876646.png";
import icon3 from "../../../assets/Icons/fi_4785856.png";
import icon4 from "../../../assets/Icons/fi_3655608.png";
import { FaArrowRight } from "react-icons/fa";

const PopularServiceSection = () => {
  return (
    <div className="bg-white bg-opacity-[0.05] py-16 md:py-[120px]">
      <Container>
        <div className="flex flex-col gap-10 md:gap-12">
          
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10">
            <div className="w-full md:w-1/2">
              <SectionHeader
                heading="Best Category Foods Menu"
                subHeading="Our Popular SERVICES"
              />
            </div>
            <p className="w-full md:w-1/2 text-center md:text-left opacity-[0.8]">
              Our menu is a celebration of flavors from around the world,
              crafted with care and creativity by our talented team of chefs.
              From desserts, each dish is a masterpiece
            </p>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-center">
            
            {/* Card 1 */}
            <div className="bg-deep-black hover:bg-deep-orange w-full duration-300 p-[30px] border border-deep-orange space-y-5">
              <img src={icon1} alt="Services icons here" />
              <div className="flex flex-col gap-2">
                <h6 className="text-3xl font-cormorantGaramond font-bold capitalize">
                  Special Foods
                </h6>
                <p className="opacity-[0.7]">
                  celebration of flavors from around the world, crafted{" "}
                </p>
              </div>
              <button className="flex justify-start items-center gap-2 text-xl font-cormorantGaramond">
                Learn More <FaArrowRight />
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-deep-black hover:bg-deep-orange w-full duration-300 p-[30px] border border-deep-orange space-y-5">
              <img src={icon2} alt="Services icons here" />
              <div className="flex flex-col gap-2">
                <h6 className="text-3xl font-cormorantGaramond font-bold capitalize">
                  Special Foods
                </h6>
                <p className="opacity-[0.7]">
                  celebration of flavors from around the world, crafted{" "}
                </p>
              </div>
              <button className="flex justify-start items-center gap-2 text-xl font-cormorantGaramond">
                Learn More <FaArrowRight />
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-deep-black hover:bg-deep-orange w-full duration-300 p-[30px] border border-deep-orange space-y-5">
              <img src={icon3} alt="Services icons here" />
              <div className="flex flex-col gap-2">
                <h6 className="text-3xl font-cormorantGaramond font-bold capitalize">
                  Special Foods
                </h6>
                <p className="opacity-[0.7]">
                  celebration of flavors from around the world, crafted{" "}
                </p>
              </div>
              <button className="flex justify-start items-center gap-2 text-xl font-cormorantGaramond">
                Learn More <FaArrowRight />
              </button>
            </div>

            {/* Card 4 */}
            <div className="bg-deep-black hover:bg-deep-orange w-full duration-300 p-[30px] border border-deep-orange space-y-5">
              <img src={icon4} alt="Services icons here" />
              <div className="flex flex-col gap-2">
                <h6 className="text-3xl font-cormorantGaramond font-bold capitalize">
                  Special Foods
                </h6>
                <p className="opacity-[0.7]">
                  celebration of flavors from around the world, crafted{" "}
                </p>
              </div>
              <button className="flex justify-start items-center gap-2 text-xl font-cormorantGaramond">
                Learn More <FaArrowRight />
              </button>
            </div>

          </div>
        </div>
      </Container>
    </div>
  );
};

export default PopularServiceSection;