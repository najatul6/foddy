import { FaArrowRight } from "react-icons/fa";
import { FiPhoneIncoming } from "react-icons/fi";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import Button from "../../Shared/Button/Button";

const RightSection = () => {
  return (
    <div className="px-14">
      <SectionHeader
        subHeading="About our food"
        heading="The Best Delicious Food Made From Us"
      />
      <div className="space-y-5 mt-4">
        <p className="opacity-[0.7]">
          Our menu is a celebration of flavors from around the world, crafted
          with care and creativity by our talented team of chefs. From savory
          appetizers to decadent desserts, each dish is a masterpiece
        </p>
        <div className="flex justify-center items-center gap-5 group">
          <div className="p-5 border border-white rounded-full group-hover:bg-deep-orange group-hover:border-none duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <g clipPath="url(#clip0_0_1464)">
                <path
                  d="M39.2187 19.2969H38.0082C38.0601 18.6861 37.9388 18.0675 37.6459 17.5047C37.2863 16.814 36.7093 16.2868 36.0101 15.993C36.0063 15.2346 35.7399 14.4997 35.2394 13.9033C34.7385 13.3062 34.0604 12.9162 33.3135 12.7811C33.2942 12.6971 33.2717 12.6139 33.2459 12.5317L39.7581 6.31828C39.9103 6.17304 39.9975 5.97258 40 5.76219C40.0025 5.55187 39.9201 5.34937 39.7712 5.20062L34.7993 0.228759C34.6506 0.0800093 34.4484 -0.00100619 34.2377 9.43418e-06C34.0274 0.00250943 33.8269 0.0896967 33.6817 0.241884L26.0273 8.26413C25.5769 7.76749 24.9814 7.41828 24.3057 7.26851C23.5454 7.10007 22.7707 7.20312 22.0962 7.54984C21.5128 7.06531 20.7786 6.79695 20 6.79695C19.2212 6.79695 18.4872 7.06531 17.9037 7.54992C17.2292 7.20312 16.4543 7.10007 15.6942 7.26851C14.934 7.43703 14.2753 7.85788 13.8106 8.45726C13.077 8.26468 12.2984 8.33179 11.5925 8.66085C11.0198 8.92788 10.5467 9.34382 10.2143 9.86343C8.23045 8.97272 6.32921 8.96741 4.76382 9.87132C3.22499 10.7598 2.28445 12.3483 2.04375 14.4651C1.87867 15.9169 2.05007 17.6061 2.5271 19.2969H0.781248C0.349843 19.2969 0 19.6467 0 20.0782V24.7657C0 30.935 4.7921 36.0062 10.8494 36.4524L10.5516 39.1325C10.5271 39.3534 10.5977 39.5742 10.7459 39.7398C10.894 39.9054 11.1058 40.0001 11.328 40.0001H28.6717C28.894 40.0001 29.1057 39.9055 29.2538 39.7398C29.4021 39.5742 29.4728 39.3534 29.4481 39.1325L29.1503 36.4524C35.2078 36.0061 39.9999 30.9349 39.9999 24.7656V20.0781C39.9999 19.6467 39.6502 19.2969 39.2187 19.2969ZM32.0759 14.0758C32.2292 14.2226 32.4344 14.301 32.6477 14.2922C33.1897 14.2709 33.6959 14.4947 34.0424 14.9076C34.389 15.3205 34.5216 15.8601 34.4063 16.3879C34.361 16.5953 34.402 16.8122 34.52 16.9886C34.6379 17.1651 34.8225 17.2859 35.0314 17.3235C35.5632 17.419 36.0109 17.7481 36.2599 18.2262C36.4344 18.5615 36.4928 18.9347 36.434 19.2969H26.1554L31.8977 13.8181C31.9387 13.9142 31.9989 14.0021 32.0759 14.0758ZM23.8919 19.2969H21.8078L36.7328 4.37195L38.1007 5.73984L23.8919 19.2969ZM34.26 1.89915L35.628 3.26711L19.5982 19.2969H17.6604L34.26 1.89915ZM12.2529 10.0769C12.7414 9.84905 13.2968 9.86061 13.777 10.1086C13.9656 10.2061 14.1857 10.2225 14.3867 10.1542C14.5876 10.0859 14.7522 9.9389 14.8425 9.74686C15.0724 9.25796 15.5061 8.91062 16.0323 8.79398C16.5587 8.67726 17.0985 8.80874 17.5135 9.15468C17.6765 9.29062 17.8879 9.35444 18.0988 9.33124C18.3097 9.30819 18.5022 9.20022 18.632 9.03226C18.9623 8.60468 19.4608 8.35944 20 8.35944C20.5391 8.35944 21.0376 8.60468 21.3679 9.03226C21.4977 9.20022 21.6902 9.30819 21.9012 9.33132C22.1123 9.35413 22.3235 9.29062 22.4865 9.15476C22.9014 8.80882 23.4414 8.67734 23.9675 8.79405C24.3592 8.88085 24.6995 9.09538 24.9428 9.40093L17.0719 17.6501C16.9104 16.9056 16.6362 16.1906 16.2561 15.5323C15.1508 13.6179 13.4191 11.7963 11.5918 10.6174C11.7611 10.3869 11.9865 10.2012 12.2529 10.0769ZM5.54515 11.2244C7.27842 10.2238 9.23451 10.9962 10.5705 11.8205C12.2358 12.8478 13.8959 14.5695 14.9029 16.3136C15.3896 17.1563 15.6561 18.1193 15.6786 19.1104L15.5007 19.2969H13.7936C13.8326 18.5844 13.6658 17.8679 13.302 17.2379C12.8064 16.3795 12.0061 15.7654 11.0487 15.509C10.0911 15.2525 9.09115 15.3841 8.2328 15.8797C7.00319 16.5896 6.31092 17.9298 6.38366 19.297H4.15788C3.24038 16.3896 3.07843 12.6485 5.54515 11.2244ZM7.94983 19.2969C7.87288 18.4761 8.27647 17.6586 9.01404 17.2328C10.0399 16.6404 11.3565 16.9932 11.9488 18.0191C12.174 18.4092 12.2688 18.8564 12.2269 19.2968L7.94983 19.2969ZM12.201 38.4374L12.4179 36.4843H27.582L27.7989 38.4374H12.201ZM28.2812 34.9218H28.2762C28.2756 34.9218 28.2751 34.9218 28.2746 34.9218H11.7263C11.7236 34.9218 11.7211 34.9218 11.7184 34.9218C6.38116 34.9217 1.99242 30.7833 1.59218 25.5468H16.484C16.9154 25.5468 17.2652 25.1971 17.2652 24.7656C17.2652 24.3341 16.9154 23.9843 16.484 23.9843H1.5625V20.8593H36.9889C36.9938 20.8594 36.9985 20.8595 37.0034 20.8595C37.0088 20.8595 37.0142 20.8594 37.0197 20.8593H38.4374V23.9843H23.5153C23.0839 23.9843 22.734 24.3341 22.734 24.7656C22.734 25.1971 23.0839 25.5468 23.5153 25.5468H38.4077C38.0075 30.7834 33.6185 34.9218 28.2812 34.9218Z"
                  fill="white"
                />
                <path
                  d="M29.375 30.0391C28.8735 30.0391 28.634 29.8652 28.2713 29.602C27.8202 29.2746 27.2586 28.8672 26.25 28.8672C25.2414 28.8672 24.6798 29.2747 24.2286 29.6021C23.8659 29.8652 23.6264 30.0391 23.125 30.0391C22.6235 30.0391 22.384 29.8652 22.0213 29.602C21.5702 29.2746 21.0086 28.8672 20 28.8672C18.9914 28.8672 18.4298 29.2747 17.9786 29.6021C17.6159 29.8652 17.3764 30.0391 16.875 30.0391C16.3735 30.0391 16.134 29.8652 15.7712 29.602C15.3202 29.2746 14.7586 28.8672 13.75 28.8672C12.7414 28.8672 12.1798 29.2747 11.7286 29.6021C11.3659 29.8652 11.1264 30.0391 10.625 30.0391C10.1936 30.0391 9.84375 30.3888 9.84375 30.8203C9.84375 31.2518 10.1936 31.6016 10.625 31.6016C11.6336 31.6016 12.1952 31.1941 12.6462 30.8667C13.009 30.6035 13.2485 30.4297 13.75 30.4297C14.2514 30.4297 14.4909 30.6035 14.8536 30.8666C15.3048 31.1941 15.8664 31.6016 16.875 31.6016C17.8836 31.6016 18.4452 31.1941 18.8962 30.8667C19.259 30.6035 19.4985 30.4297 20 30.4297C20.5014 30.4297 20.7409 30.6035 21.1036 30.8666C21.5548 31.1941 22.1164 31.6016 23.125 31.6016C24.1336 31.6016 24.6952 31.1941 25.1463 30.8667C25.509 30.6035 25.7485 30.4297 26.25 30.4297C26.7514 30.4297 26.9909 30.6035 27.3536 30.8666C27.8048 31.1941 28.3664 31.6016 29.375 31.6016C29.8064 31.6016 30.1562 31.2518 30.1562 30.8203C30.1562 30.3888 29.8065 30.0391 29.375 30.0391Z"
                  fill="white"
                />
                <path
                  d="M20.0003 25.5469C20.4317 25.5469 20.7816 25.1971 20.7816 24.7656C20.7816 24.3341 20.4317 23.9844 20.0003 23.9844H19.9997C19.5683 23.9844 19.2188 24.3341 19.2188 24.7656C19.2188 25.1971 19.5689 25.5469 20.0003 25.5469Z"
                  fill="white"
                />
                <path
                  d="M31.3226 17.9937C31.754 17.9937 32.1038 17.6439 32.1038 17.2124C32.1038 16.7809 31.754 16.4312 31.3226 16.4312H31.322C30.8905 16.4312 30.541 16.7809 30.541 17.2124C30.541 17.6439 30.8912 17.9937 31.3226 17.9937Z"
                  fill="white"
                />
                <path
                  d="M17.7288 13.228C18.1602 13.228 18.5101 12.8783 18.5101 12.4468C18.5101 12.0153 18.1602 11.6655 17.7288 11.6655H17.7283C17.2969 11.6655 16.9473 12.0153 16.9473 12.4468C16.9473 12.8783 17.2974 13.228 17.7288 13.228Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_0_1464">
                  <rect width="40" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="text-white">
            <h4 className="text-3xl font-cormorantGaramond font-bold capitalize">
              Traditional Foods
            </h4>
            <p className="opacity-[0.6] mt-[10px]">
              our talented team of chefs. From savory appetizers to decadent
              desserts, each dish is a masterpiece
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5 group">
          <div className="p-5 border border-white rounded-full group-hover:bg-deep-orange group-hover:border-none duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                d="M29.5613 25.7652L24.5162 24.6438V23.8709V23.0496C26.4659 21.6425 27.7421 19.3574 27.7421 16.7741V14.1935H28.3873V10.3226H27.7421V8.9864C29.9279 8.67215 31.613 6.78773 31.613 4.51613C31.6128 2.02575 29.5864 0 27.0967 0C25.7083 0 24.3974 0.652296 23.5483 1.73485C22.6993 0.652296 21.3883 0 19.9999 0C18.6114 0 17.3006 0.652296 16.4514 1.73485C15.6027 0.652296 14.2917 0 12.9032 0C10.4136 0 8.387 2.02575 8.387 4.51613C8.387 6.78773 10.0721 8.67227 12.2579 8.9864V10.3226H11.6129V14.1935H12.2582V16.7741C12.2582 19.3573 13.5343 21.6425 15.484 23.0496V23.8709V24.6438L10.4389 25.7645C6.57179 26.6245 3.87109 29.9903 3.87109 33.9522V40H36.1291V33.9522C36.129 29.9903 33.4284 26.6245 29.5613 25.7652ZM9.67742 4.51613C9.67742 2.73739 11.1245 1.29031 12.9032 1.29031C14.0446 1.29031 15.1117 1.90835 15.6884 2.9038L15.8749 3.22571H17.0278L17.2143 2.9038C17.7917 1.90835 18.8588 1.29031 20.0001 1.29031C21.1414 1.29031 22.2085 1.90835 22.7852 2.9038L22.9717 3.22571H24.1247L24.3112 2.9038C24.8886 1.90835 25.9557 1.29031 27.097 1.29031C28.8757 1.29031 30.3228 2.73739 30.3228 4.51613C30.3228 6.29488 28.8757 7.74196 27.097 7.74196H26.4518V10.3226H13.5483V7.74196H12.9031C11.1245 7.74196 9.67742 6.29488 9.67742 4.51613ZM12.9032 11.6129H27.0967V12.9032H12.9032V11.6129ZM13.5483 16.7741V14.1935H26.4515V16.7741C26.4515 20.3315 23.5574 23.2258 19.9999 23.2258C16.4425 23.2258 13.5483 20.3316 13.5483 16.7741ZM23.2258 23.8032V23.8709V24.5161H22.5806C21.5135 24.5161 20.6451 25.3845 20.6451 26.4516H19.3548C19.3548 25.3845 18.4864 24.5161 17.4193 24.5161H16.7741V23.8709V23.8032H16.7742C17.7574 24.2561 18.8478 24.5161 20 24.5161C21.1522 24.5161 22.2426 24.2561 23.2258 23.8032ZM12.9032 38.7098H11.6129V36.1292H10.3225V38.7098H5.16129V33.9522C5.16129 30.6006 7.44647 27.7517 10.7181 27.0252L16.1986 25.8065H17.4194C17.7755 25.8065 18.0646 26.0955 18.0646 26.4517V27.742H19.3549V29.2408L12.9032 31.8214V38.7098ZM34.8387 38.7096H29.6775V36.129H28.3872V38.7096H14.1934V32.6948L20.6451 30.1142V27.7419H21.9354V26.4516C21.9354 26.0954 22.2244 25.8064 22.5806 25.8064H23.8012L29.2818 27.025C32.5534 27.7515 34.8386 30.6005 34.8386 33.9521V38.7096H34.8387Z"
                fill="white"
              />
              <path
                d="M16.1296 34.8388C16.4859 34.8388 16.7748 34.5499 16.7748 34.1936C16.7748 33.8372 16.4859 33.5483 16.1296 33.5483C15.7732 33.5483 15.4844 33.8372 15.4844 34.1936C15.4844 34.5499 15.7732 34.8388 16.1296 34.8388Z"
                fill="white"
              />
              <path
                d="M16.1296 37.4193C16.4859 37.4193 16.7748 37.1305 16.7748 36.7741C16.7748 36.4178 16.4859 36.1289 16.1296 36.1289C15.7732 36.1289 15.4844 36.4178 15.4844 36.7741C15.4844 37.1305 15.7732 37.4193 16.1296 37.4193Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="text-white">
            <h4 className="text-3xl font-cormorantGaramond font-bold capitalize">
              Passionate Chefs
            </h4>
            <p className="opacity-[0.6] mt-[10px]">
              our talented team of chefs. From savory appetizers to decadent
              desserts, each dish is a masterpiece
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-12">
        <Button text="About More" icon={<FaArrowRight />} withBg />
        <div className="flex justify-center items-center gap-3">
          <div className="rounded-full p-3 bg-deep-orange bg-opacity-[10%]">
            <FiPhoneIncoming className="text-deep-orange" />
          </div>
          <div>
            <p className="text-xs opacity-[0.6]">Call For Order</p>
            <p className="font-medium">+880 177 382 7414</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
