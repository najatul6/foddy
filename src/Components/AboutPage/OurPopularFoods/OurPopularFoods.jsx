import { useState } from "react";
import Container from "../../Shared/Container/Container";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import { useEffect } from "react";

const OurPopularFoods = () => {
  const [popularFoods, setPopularFoods] = useState([]);
  useEffect(() => {
    fetch("/popularMenu.json")
      .then((response) => response.json())
      .then((data) => setPopularFoods(data));
  }, []);
  return (
    <div className="py-[120px] bg-white bg-opacity-[0.05] mt-[120px]">
      <Container>
        <div className="flex justify-center items-center flex-col">
          <SectionHeader
            heading="Best Category Foods Menu"
            subHeading="Our Popular Foods"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-[60px]">
          {popularFoods?.map((food) => (
            <div key={food.id}>
              <div className="flex flex-col items-center justify-center text-center bg-deep-black p-[30px] hover:bg-deep-orange cursor-pointer transition-all duration-300 gap-4">
                <img src={food.image} alt={food.name} className="" />
                <h3 className="text-[30px] text-white capitalize font-bold font-cormorantGaramond">
                  {food.name}
                </h3>
                <p className="text-white opacity-[0.6]">{food.description}</p>
                <button className="text-white font-cormorantGaramond text-base flex justify-center items-center">
                  View More &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default OurPopularFoods;
