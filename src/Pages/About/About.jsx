import AboutOurFood from "../../Components/AboutPage/AboutOurFood/AboutOurFood";
import BestFoodMenu from "../../Components/AboutPage/BestFoodMenu/BestFoodMenu";
import OurBestChefs from "../../Components/AboutPage/OurBestChefs/OurBestChefs";
import OurFoodShowcase from "../../Components/AboutPage/OurFoodShowcase/OurFoodShowcase";
import OurPopularFoods from "../../Components/AboutPage/OurPopularFoods/OurPopularFoods";
import Banner from "../../Components/Shared/Banner/Banner";
import Container from "../../Components/Shared/Container/Container";
import StickerCircle from "../../Components/Shared/StickerCircle/StickerCircle";
import image from "../../assets/resources/Rectangle 642.png";

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
      <OurBestChefs />
      <Container>
        <div className="relative">
          <img src={image} alt="Image Banner" />
          <div className="absolute top-[40%] left-[40%]">
            <StickerCircle circleText="---------------See Our Menu---------------" />
          </div>
        </div>
      </Container>
      <OurFoodShowcase />
    </div>
  );
};

export default About;
