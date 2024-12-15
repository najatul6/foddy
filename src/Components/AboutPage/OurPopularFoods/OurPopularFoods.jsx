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
              <div className="flex flex-col items-center justify-center text-center">
                <img src={food.image} alt={food.name} className="" />
                <h3>{food.name}</h3>
                <p>{food.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default OurPopularFoods;
