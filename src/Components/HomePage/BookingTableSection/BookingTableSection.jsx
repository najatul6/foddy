import Rectangle686 from "../../../assets/resources/Rectangle 686.png";
import Container from "../../Shared/Container/Container";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
const BookingTableSection = () => {
  return (
      <div className="relative mt-[120px]">
        <img
          src={Rectangle686}
          alt="food background banner"
          className="w-full object-cover"
        />
        <div className="absolute top-0 opacity-70 w-full mx-auto flex justify-center items-center h-full bg-deep-black z-[100]">
            <Container>
                <div>
                <SectionHeader heading="Make A Reservations Table" subHeading="Booking Table" />
                </div>
            </Container>
        </div>
    </div>
  );
};

export default BookingTableSection;
