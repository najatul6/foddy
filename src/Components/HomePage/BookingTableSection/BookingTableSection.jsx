import { FaArrowRight, FaCalendarAlt, FaClock } from "react-icons/fa";
import Rectangle686 from "../../../assets/resources/Rectangle 686.png";
import Container from "../../Shared/Container/Container";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import { FaPerson } from "react-icons/fa6";
import Button from "../../Shared/Button/Button";

const BookingTableSection = () => {
  return (
    <div className="relative">
      <img
        src={Rectangle686}
        alt="food background banner"
        className="w-full h-[600px] lg:h-auto object-cover"
      />
      
      <div className="absolute top-0 bg-opacity-80 flex items-center justify-center w-full h-full bg-deep-black z-[100]">
        <div className="text-center w-full px-4 md:px-0">
          <Container>
            <SectionHeader
              heading="Make A Reservations Table"
              subHeading="Booking Table"
            />

            <p className="text-center w-full md:w-2/3 mx-auto opacity-[0.6] mt-4 md:mt-0">
              To make a reservation at our restaurant, simply call our booking
              hotline or visit our website
            </p>
            
            <div className="w-full flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center mt-8 md:mt-10">
              
              {/* Reserve Date  */}
              <div className="relative w-full">
                <input
                  type="text"
                  className="text-white w-full bg-transparent rounded-lg border-opacity-[0.7] border-white border p-4 md:p-5 peer focus:outline-none placeholder:text-white"
                  defaultValue={new Date().toLocaleDateString()}
                  placeholder="Reserved Date"
                />
                <p className="absolute right-4 top-[20px] md:top-[25px]">
                  <FaCalendarAlt />
                </p>
              </div>
              
              {/* Reserve Time */}
              <div className="relative w-full">
                <input
                  type="text"
                  className="text-white w-full bg-transparent rounded-lg border-opacity-[0.7] border-white border p-4 md:p-5 peer focus:outline-none placeholder:text-white"
                  defaultValue="12:00 PM"
                  placeholder="Reserved Time"
                />
                <p className="absolute right-4 top-[20px] md:top-[25px]">
                  <FaClock />
                </p>
              </div>
              
              {/* Reserve Person */}
              <div className="relative w-full">
                <input
                  type="text"
                  className="text-white w-full bg-transparent rounded-lg border-opacity-[0.7] border-white border p-4 md:p-5 peer focus:outline-none placeholder:text-white"
                  placeholder="Person"
                />
                <p className="absolute right-4 top-[20px] md:top-[25px]">
                  <FaPerson />
                </p>
              </div>
              
            </div>
            
            <div className="mt-8 md:mt-10 flex justify-center items-center">
              <Button text="Book A Reservation" icon={<FaArrowRight />} />
            </div>
            
          </Container>
        </div>
      </div>
    </div>
  );
};

export default BookingTableSection;