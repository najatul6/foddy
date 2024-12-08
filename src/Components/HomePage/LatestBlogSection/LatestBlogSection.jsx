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
          <div>
            <img
              src={image}
              alt="latest blog"
              className="w-full object-cover"
            />
            <div>
              <Button text="RECEPIES" />
              <p>The Art of Food Pairing to Perfect Your Palate Guide</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LatestBlogSection;
