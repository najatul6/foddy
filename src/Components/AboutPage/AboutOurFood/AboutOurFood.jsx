import image1 from "../../../assets/resources/Rectangle 632.png"
import image2 from "../../../assets/resources/Rectangle 631.png"
import SectionHeader from "../../Shared/SectionHeader/SectionHeader"
const AboutOurFood = () => {
  return (
    <div>
        <img src={image1} alt="Food banner" className="w-full" />
        <div>
          <img src={image2} alt="Chef with Food banner" className="w-full" />
          <div>
            <SectionHeader heading="The Best Delicious Food Made From Us" subHeading="About Our Food"/>
          </div>
        </div>
    </div>
  )
}

export default AboutOurFood