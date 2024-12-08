import Banner from "../../Components/HomePage/Banner/Banner"
import AboutOurFoodSection from "../../Components/HomePage/AboutOurFoodSection/AboutOurFoodSection"
import FindRestaurant from "../../Components/HomePage/FindRestaurant/FindRestaurant"
import Award from "../../Components/HomePage/Award/Award"
import PopularServiceSection from "../../Components/HomePage/PopularServiceSection/PopularServiceSection"
import TestyMenuSection from "../../Components/HomePage/TestyMenuSection/TestyMenuSection"
import OurBestChefSection from "../../Components/HomePage/OurBestChefSection/OurBestChefSection"
import Testimonials from "../../Components/HomePage/Testimonials/Testimonials"
import IncrementsSection from "../../Components/HomePage/IncrementsSection/IncrementsSection"

const Home = () => {
  return (
    <div className="text-white">
        <Banner/>
        <AboutOurFoodSection />
        <FindRestaurant />
        <Award/>
        <PopularServiceSection/>
        <TestyMenuSection/>
        <OurBestChefSection/>
        <Testimonials/>
        <IncrementsSection/>
    </div>
  )
}

export default Home