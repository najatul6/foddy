import handcook from "../../../assets/resources/handcook.png";
import coffee from "../../../assets/resources/coffee.png";
import { FaArrowRight } from "react-icons/fa";
import StickerCircle from "../../Shared/StickerCircle/StickerCircle";
import Button from "../../Shared/Button/Button";
const Banner = () => {
  return (
    <div className="flex relative justify-center items-center w-full h-[800px] pt-20">
      <div className="w-3/5 h-full overflow-hidden">
        <img
          src={handcook}
          alt="Cooking prepare photo"
          className="w-full h-full"
        />
      </div>
      <div className="w-full h-full bg-deep-black relative">
        <h1 className="text-[50px] lg:text-[70px] px-4 uppercase font-bold font-cormorantGaramond">
          ReserveD Your <br /> Table Today
        </h1>
        <div className="absolute bottom-16 left-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="549"
            height="274"
            viewBox="0 0 549 274"
            fill="none"
          >
            <path
              opacity="0.3"
              d="M269.341 259.982C326.542 251.801 379.027 227.49 421.435 199.614C463.216 172.126 497.961 140.653 523.059 107.554C535.791 90.7493 546.415 73.007 548.19 55.7363C549.859 39.7485 543.622 24.2324 526.948 14.07C510.274 3.90768 486.717 0.857155 462.543 0.535775C434.084 0.145295 404.318 3.55372 375.193 9.27043C317.689 20.5677 261.315 40.1767 209.71 62.5502C158.106 84.9237 112.71 110.194 71.7111 138.878C34.0029 165.239 -2.46625 197.486 0.223063 229.994C1.45626 244.882 11.096 258.131 30.3523 265.468C49.6086 272.806 73.8746 273.738 97.9551 272.779C157.454 270.401 219.394 256.955 276.942 239.306C334.491 221.658 393.914 197.235 449.567 172.794C463.05 166.882 476.45 160.889 489.853 154.915C491.549 154.166 494.478 152.214 492.575 151.293C490.671 150.371 486.187 152.117 484.337 152.937C431.67 176.36 378.773 199.811 323.161 219.694C267.549 239.577 210.62 255.323 152.149 262.884C104.979 268.986 44.2253 272.789 21.5126 246.931C11.1208 235.101 10.3094 219.809 16.1736 204.933C22.3667 189.201 36.4864 173.918 52.8552 160.095C69.2241 146.272 89.3872 132.424 109.654 119.736C129.92 107.048 152.241 94.5409 175.164 83.1684C221.313 60.2616 271.701 40.4863 324.039 25.7985C351.829 17.9973 380.48 11.7693 409.077 8.56584C435.044 5.65633 461.807 4.82578 485.155 8.82604C507.836 12.69 524.489 21.9309 531.84 35.6583C539.19 49.3856 536.876 66.493 529.115 82.6126C521.193 99.1004 508.308 115.484 494.218 131.076C480.128 146.667 464.093 161.464 446.116 175.643C410.457 203.801 366.19 231.14 314.448 246.274C301.824 249.978 288.8 252.879 275.765 254.738C272.925 255.155 269.594 256.127 267.713 257.781C266.319 259.018 266.63 260.371 269.341 259.982Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="absolute bottom-0 right-0">
          <img src={coffee} alt="Coffee Cup" className="" />
          <div className="absolute -top-[10rem] -left-[8rem]" >
            <StickerCircle circleText={"Best Restuarant Template by - Najatul islam ·"} />
          </div>
        </div>
      </div>
      <div className="w-[450px] h-[250px] flex justify-center flex-col items-start gap-4 px-4 top-[50%] absolute left-[20%] bg-deep-black">
        <h3 className="text-4xl font-cormorantGaramond capitalize">celebration of flavors  from around the world crafted. </h3>
        <Button text="View Our Menu" icon={<FaArrowRight />} withBg />
      </div>
    </div>
  );
};

export default Banner;
