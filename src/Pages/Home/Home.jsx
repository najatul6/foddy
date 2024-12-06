import Banner from "../../Components/HomePage/Banner/Banner"
import AboutOurFoodSection from "../../Components/HomePage/AboutOurFoodSection/AboutOurFoodSection"
import FindRestaurant from "../../Components/HomePage/FindRestaurant/FindRestaurant"
import Award from "../../Components/HomePage/Award/Award"

const Home = () => {
  return (
    <div className="text-white">
        <Banner/>
        <AboutOurFoodSection />
        <FindRestaurant />
        <Award/>
    </div>
  )
}

export default Home