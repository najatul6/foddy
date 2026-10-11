import Container from "../../Shared/Container/Container";
import award1 from "../../../assets/Icons/image 70.png"
import award2 from "../../../assets/Icons/image 71.png"
import award3 from "../../../assets/Icons/image 72.png"
import award4 from "../../../assets/Icons/image 73.png"
import award5 from "../../../assets/Icons/image 74.png"

const Award = () => {
  return (
    <div className="bg-white py-8 md:py-12">
      <Container>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-32 w-full">
          <img src={award1} alt="Award 1" className="w-24 md:w-auto object-contain" />
          <img src={award2} alt="Award 2" className="w-24 md:w-auto object-contain" />
          <img src={award3} alt="Award 3" className="w-24 md:w-auto object-contain" />
          <img src={award4} alt="Award 4" className="w-24 md:w-auto object-contain" />
          <img src={award5} alt="Award 5" className="w-24 md:w-auto object-contain" />
        </div>
      </Container>
    </div>
  );
};

export default Award;