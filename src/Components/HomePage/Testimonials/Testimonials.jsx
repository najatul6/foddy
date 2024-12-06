import Container from "../../Shared/Container/Container"
import SectionHeader from "../../Shared/SectionHeader/SectionHeader"

const Testimonials = () => {
  return (
    <div className="py-[120px] bg-deep-orange mt-[120px] flex justify-center items-center">
        <Container>
            <div>
                <SectionHeader heading="Our Guests Share This About Our Foods." subHeading="testimonials" white={"#FFF"}/>
            </div>
        </Container>
    </div>
  )
}

export default Testimonials