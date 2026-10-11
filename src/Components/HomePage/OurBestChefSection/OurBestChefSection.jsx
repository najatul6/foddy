import Container from "../../Shared/Container/Container"
import SectionHeader from "../../Shared/SectionHeader/SectionHeader"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { chefs } from "../../../utils/chefs";
import ChefCard from "./ChefCard";

const OurBestChefSection = () => {
  return (
        <Container>
            <div className="w-full md:w-2/3 lg:w-1/3 mx-auto text-center px-4 md:px-0">
                <SectionHeader heading={"Meet Our Exclusive Kitchen Teams"} subHeading={"OUR best chef’s"}/>
            </div>
            
            <hr className="w-3/4 md:w-1/2 mx-auto my-6 md:my-10" />
            
            <div className="pb-10">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 1500,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination,Autoplay]}
                    className="mySwiper"
                >
                    {chefs?.map((chef, id) => {
                        return (
                            <SwiperSlide key={id}>
                                <ChefCard chef={chef}/>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </Container>
  )
}

export default OurBestChefSection;