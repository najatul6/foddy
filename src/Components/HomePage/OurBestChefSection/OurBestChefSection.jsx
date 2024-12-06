import Container from "../../Shared/Container/Container"
import SectionHeader from "../../Shared/SectionHeader/SectionHeader"

const OurBestChefSection = () => {
  return (
    <div className="mt-[120px]">
        <Container>
            <div className="w-1/3 mx-auto text-center">
                <SectionHeader heading={"Meet Our Exclusive Kitchen Teams"} subHeading={"OUR best chef’s"}/>
            </div>
            <hr className="w-1/2 mx-auto my-10" />
        </Container>
    </div>
  )
}

export default OurBestChefSection