import Container from "../../Shared/Container/Container";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import image from "../../../assets/resources/Rectangle 655.png";
import Button from "../../Shared/Button/Button";

const LatestBlogSection = () => {
  return (
    <div className="mt-[120px] py-24">
      <Container>
        <div className="w-1/2 mx-auto text-center border">
          <SectionHeader
            heading="Read Our Latest & Trending News Blogs"
            subHeading="Latest Blog"
          />
        </div>
        <div>
          <div className="">
            <img
              src={image}
              alt="latest blog"
              className="w-full object-cover"
            />
            <div>
              <Button text="RECEPIES" />
              <h2 className="text-[28px] font-cormorantGaramond font-bold uppercase underline">The Art of Food Pairing to Perfect Your Palate Guide</h2>
              <p className="opacity-[0.8]">
                Majority have suffered alteration in some form Marketing System
              </p>
              <div className="flex justify-start items-center gap-6">
                <img
                  src={image}
                  alt="profile pic"
                  className="w-12 h-12 border-2 rounded-full"
                />
                <p>David Martin</p>
              </div>
              <hr className="my-6 opacity-[0.5]" />
              <p className="uppercase opacity-[0.8]">April 16,2024 / Recipes</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LatestBlogSection;
