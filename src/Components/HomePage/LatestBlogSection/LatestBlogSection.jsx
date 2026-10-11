import Container from "../../Shared/Container/Container";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import image from "../../../assets/resources/Rectangle 655.png";
import Button from "../../Shared/Button/Button";
import { FaArrowRight } from "react-icons/fa";

const LatestBlogSection = () => {
  return (
    <div className="py-12 md:py-24">
      <Container>
        <div>
          {/* w-1/2 মোবাইলে খুব চিপা হয়ে যেতো, তাই w-full md:w-3/4 lg:w-1/2 দেওয়া হয়েছে */}
          <div className="w-full md:w-3/4 lg:w-1/2 mx-auto text-center px-4 md:px-0">
            <SectionHeader
              heading="Read Our Latest & Trending News Blogs"
              subHeading="Latest Blog"
            />
          </div>
          
          {/* কার্ডগুলো বড় তাই মোবাইলে ১ কলাম এবং বড় স্ক্রিনে (lg) ২ কলাম দেওয়া হয়েছে */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-6 mt-8 md:mt-10">
            
            {/* card 1 */}
            {/* মোবাইলে ইমেজ ও টেক্সট নিচে নিচে আসার জন্য flex-col এবং ট্যাবলেটে পাশাপাশি থাকার জন্য sm:flex-row দেওয়া হয়েছে */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full">
              <img
                src={image}
                alt="latest blog"
                // ইমেজের সাইজ মোবাইলের জন্য রেস্পন্সিভ করা হয়েছে এবং চ্যাপ্টা হওয়া এড়াতে object-cover দেওয়া হয়েছে
                className="w-full sm:w-[250px] xl:w-[300px] h-[250px] sm:h-[350px] object-cover"
              />
              <div className="flex flex-col justify-center items-start gap-4 md:gap-5 h-full w-full px-4 sm:px-0">
                <p className="py-1 md:py-2 px-4 md:px-6 uppercase bg-deep-orange font-semibold text-white font-cormorantGaramond text-sm md:text-base">
                  RECEPIES
                </p>
                <h2 className="text-[18px] md:text-[20px] font-cormorantGaramond font-bold uppercase underline">
                  The Art of Food Pairing to Perfect Your Palate Guide
                </h2>
                <p className="opacity-[0.8] text-sm md:text-base">
                  Majority have suffered alteration in some form Marketing
                  System
                </p>
                <div className="flex justify-start items-center gap-4 md:gap-6">
                  <img
                    src={image}
                    alt="profile pic"
                    className="w-10 h-10 md:w-12 md:h-12 border-2 rounded-full object-cover"
                  />
                  <p className="text-sm md:text-base">David Martin</p>
                </div>
                <hr className="w-full opacity-[0.5]" />
                <p className="uppercase opacity-[0.8] text-sm md:text-base">
                  April 16, 2024 / Recipes
                </p>
              </div>
            </div>

            {/* card 2 */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full">
              <img
                src={image}
                alt="latest blog"
                className="w-full sm:w-[250px] xl:w-[300px] h-[250px] sm:h-[350px] object-cover"
              />
              <div className="flex flex-col justify-center items-start gap-4 md:gap-5 h-full w-full px-4 sm:px-0">
                <p className="py-1 md:py-2 px-4 md:px-6 uppercase bg-deep-orange font-semibold text-white font-cormorantGaramond text-sm md:text-base">
                  RECEPIES
                </p>
                <h2 className="text-[18px] md:text-[20px] font-cormorantGaramond font-bold uppercase underline">
                  The Art of Food Pairing to Perfect Your Palate Guide
                </h2>
                <p className="opacity-[0.8] text-sm md:text-base">
                  Majority have suffered alteration in some form Marketing
                  System
                </p>
                <div className="flex justify-start items-center gap-4 md:gap-6">
                  <img
                    src={image}
                    alt="profile pic"
                    className="w-10 h-10 md:w-12 md:h-12 border-2 rounded-full object-cover"
                  />
                  <p className="text-sm md:text-base">David Martin</p>
                </div>
                <hr className="w-full opacity-[0.5]" />
                <p className="uppercase opacity-[0.8] text-sm md:text-base">
                  April 16, 2024 / Recipes
                </p>
              </div>
            </div>

          </div>
          
          <div className="flex justify-center items-center mt-10">
            <Button text="View All Blogs" icon={<FaArrowRight />} withBg />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LatestBlogSection;