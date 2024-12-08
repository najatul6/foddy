import Rectangle686 from "../../../assets/resources/Rectangle 686.png";
const BookingTableSection = () => {
  return (
      <div className="relative mt-[120px]">
        <img
          src={Rectangle686}
          alt="food background banner"
          className="w-full object-cover"
        />
        <div className="absolute top-0 opacity-70 w-full h-full bg-deep-black z-[100]"></div>
    </div>
  );
};

export default BookingTableSection;
