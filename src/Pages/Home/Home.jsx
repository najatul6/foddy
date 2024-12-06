import Banner from "../../Components/HomePage/Banner/Banner"
import AboutOurFoodSection from "../../Components/HomePage/AboutOurFoodSection/AboutOurFoodSection"
import FindRestaurant from "../../Components/HomePage/FindRestaurant/FindRestaurant"
import Award from "../../Components/HomePage/Award/Award"
import PopularServiceSection from "../../Components/HomePage/PopularServiceSection/PopularServiceSection"
import TestyMenuSection from "../../Components/HomePage/TestyMenuSection/TestyMenuSection"

const Home = () => {
  return (
    <div className="text-white">
        <Banner/>
        <AboutOurFoodSection />
        <FindRestaurant />
        <Award/>
        <PopularServiceSection/>
        <TestyMenuSection/>
    </div>
  )
}

export default Home