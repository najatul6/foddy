import Container from "../../Shared/Container/Container";
import award1 from "../../../assets/Icons/image 70.png"
import award2 from "../../../assets/Icons/image 71.png"
import award3 from "../../../assets/Icons/image 72.png"
import award4 from "../../../assets/Icons/image 73.png"
import award5 from "../../../assets/Icons/image 74.png"
const Award = () => {
  return (
    <div className="bg-white py-12">
      <Container>
        <div className="flex justify-center items-center gap-[120px]">
        <img src={award1} alt="" />
        <img src={award2} alt="" />
        <img src={award3} alt="" />
        <img src={award4} alt="" />
        <img src={award5} alt="" />
        </div>
      </Container>
    </div>
  );
};

export default Award;
