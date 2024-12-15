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
        <div>
          <SectionHeader
            heading="Best Category Foods Menu"
            subHeading="Our Popular Foods"
          />
        </div>
        <div>
          {popularFoods?.map((food) => (
            <div key={food.id}>
              <div className="flex flex-col items-center justify-center text-center bg-deep-black p-[30px]">
                <img src={food.image} alt={food.name} className="" />
                <h3 className="text-[30px] text-white capitalize font-bold font-cormorantGaramond">
                  {food.name}
                </h3>
                <p className="text-white opacity-[0.6]">{food.description}</p>
                <button className="text-white font-cormorantGaramond text-base">
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
