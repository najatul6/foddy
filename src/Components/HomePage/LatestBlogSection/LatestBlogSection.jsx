import Container from "../../Shared/Container/Container";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import image from "../../../assets/resources/Rectangle 655.png";
import Button from "../../Shared/Button/Button";
import { FaArrowRight } from "react-icons/fa";

const LatestBlogSection = () => {
  return (
    <div className="mt-[120px] py-24">
      <Container>
        <div>
          <div className="w-1/2 mx-auto text-center">
            <SectionHeader
              heading="Read Our Latest & Trending News Blogs"
              subHeading="Latest Blog"
            />
          </div>
          <div className="grid grid-cols-2 gap-6 mt-10">
            {/* card 1 */}
            <div className="flex gap-6 justify-center items-center">
              <img
                src={image}
                alt="latest blog"
                className="w-[300px] h-[350px]"
              />
              <div className="flex flex-col justify-center items-start gap-5 h-full">
                <Button text="RECEPIES" />
                <h2 className="text-[20px] font-cormorantGaramond font-bold uppercase underline">
                  The Art of Food Pairing to Perfect Your Palate Guide
                </h2>
                <p className="opacity-[0.8]">
                  Majority have suffered alteration in some form Marketing
                  System
                </p>
                <div className="flex justify-start items-center gap-6">
                  <img
                    src={image}
                    alt="profile pic"
                    className="w-12 h-12 border-2 rounded-full"
                  />
                  <p>David Martin</p>
                </div>
                <hr className=" w-full opacity-[0.5]" />
                <p className="uppercase opacity-[0.8]">
                  April 16,2024 / Recipes
                </p>
              </div>
            </div>
            {/* card 2 */}
            <div className="flex gap-6 justify-center items-center">
              <img
                src={image}
                alt="latest blog"
                className="w-[300px] h-[350px]"
              />
              <div className="flex flex-col justify-center items-start gap-5 h-full">
                <Button text="RECEPIES" />
                <h2 className="text-[20px] font-cormorantGaramond font-bold uppercase underline">
                  The Art of Food Pairing to Perfect Your Palate Guide
                </h2>
                <p className="opacity-[0.8]">
                  Majority have suffered alteration in some form Marketing
                  System
                </p>
                <div className="flex justify-start items-center gap-6">
                  <img
                    src={image}
                    alt="profile pic"
                    className="w-12 h-12 border-2 rounded-full"
                  />
                  <p>David Martin</p>
                </div>
                <hr className="w-full opacity-[0.5]" />
                <p className="uppercase opacity-[0.8]">
                  April 16,2024 / Recipes
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mt-10">
            <Button text="View All Blogs" icon={<FaArrowRight />} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LatestBlogSection;
