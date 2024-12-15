import AboutOurFood from "../../Components/AboutPage/AboutOurFood/AboutOurFood";
import BestFoodMenu from "../../Components/AboutPage/BestFoodMenu/BestFoodMenu";
import OurBestChefs from "../../Components/AboutPage/OurBestChefs/OurBestChefs";
import OurPopularFoods from "../../Components/AboutPage/OurPopularFoods/OurPopularFoods";
import Banner from "../../Components/Shared/Banner/Banner";

const About = () => {
  return (
    <div className="space-y-[120px]">
      <Banner
        heading={"An Epicurean Adventure Awaits Reserve Your Table Today"}
        subHeading={
          "Our menu is a celebration of flavors from around the world, crafted with care and creativity by our talented team of chefs. From savory appetizers to decadent desserts, each dish is a masterpiece"
        }
      />
      <AboutOurFood />
      <OurPopularFoods />
      <BestFoodMenu />
      <OurBestChefs/>
    </div>
  );
};

export default About;
