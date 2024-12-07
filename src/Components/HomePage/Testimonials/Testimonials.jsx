import Container from "../../Shared/Container/Container"
import SectionHeader from "../../Shared/SectionHeader/SectionHeader"
import TestimonialCard from "./TestimonialCard"

const Testimonials = () => {
  return (
    <div className="py-[120px] bg-deep-orange mt-[120px] flex justify-center items-center">
        <Container>
            <div className="py-[120px]">
                <SectionHeader heading="Our Guests Share This About Our Foods." subHeading="testimonials" white={"#FFF"}/>
                <div>
                  <TestimonialCard />
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Testimonials