import { FaCalendarAlt, FaClock } from "react-icons/fa";
import Rectangle686 from "../../../assets/resources/Rectangle 686.png";
import Container from "../../Shared/Container/Container";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import { FaPerson } from "react-icons/fa6";
const BookingTableSection = () => {
  return (
    <div className="relative mt-[120px]">
      <img
        src={Rectangle686}
        alt="food background banner"
        className="w-full object-cover"
      />
      <div className="absolute top-0 opacity-80 w-full mx-auto flex justify-center items-center h-full bg-deep-black z-[100]">
        <Container>
          <div className="text-center">
            <SectionHeader
              heading="Make A Reservations Table"
              subHeading="Booking Table"
            />
          </div>
          <p className="text-center w-2/3 mx-auto opacity-[0.6]">
            To make a reservation at our restaurant, simply call our booking
            hotline or visit our website
          </p>
          <div>
            {/* Reserve Date  */}
            <div className="relative">
              <input
                type="text"
                className="text-white w-full bg-transparent border-white border px-4 py-2 peer focus:outline-none  placeholder:text-white"
                defaultValue={new Date().toLocaleDateString()}
                placeholder=" Reserved Date"
              />
              <p className="absolute right-4 top-[10px]">
                <FaCalendarAlt />
              </p>
            </div>
            {/* Reserve Time */}
            <div className="relative">
              <input
                type="text"
                className="text-white w-full bg-transparent border-white border px-4 py-2 peer focus:outline-none  placeholder:text-white"
                defaultValue="12:00 PM"
                placeholder="Reserved Time"
              />
              <p className="absolute right-4 top-[10px]">
                <FaClock />
              </p>
            </div>
            {/* Reserve Person */}
            <div className="relative">
              <input
                type="text"
                className="text-white w-full bg-transparent border-white border px-4 py-2 peer focus:outline-none  placeholder:text-white"
                placeholder="Person"
              />
              <p className="absolute right-4 top-[10px]">
                <FaPerson />
              </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default BookingTableSection;
