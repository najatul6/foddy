import Container from "../Container/Container";

const Footer = () => {
  return (
    <div className="border-t-[0.3px] mt-[120px] bg-deep-black py-20">
      <Container>
        <div className="flex justify-center items-center gap-14">
          <h1 className="text-5xl font-cormorantGaramond font-bold text-white">
            Subscribe For Daily Update
          </h1>
          <div>
            <input
              type="email"
              name="email"
              id=""
              placeholder="Enter email address"
              className="bg-[#3C3C3C] bg-opacity-[0.51] px-5 py-2 placeholder:opacity-[0.5]"
            />
            <button className="bg-deep-orange px-5 py-2 font-cormorantGaramond font-medium text-white">
              Subscribe Now
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
