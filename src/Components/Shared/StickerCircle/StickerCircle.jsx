import PropTypes from "prop-types";
import "./StickerCircle.css"; // Import your CSS file here

const StickerCircle = ({ circleText }) => {
  return (
    <div className="relative flex items-center justify-center w-64 h-64 rounded-full bg-orange-600">
      {/* Circular Text */}
      <div className="circle-text-container">
        {Array.from(circleText).map((char, index) => (
          <span
            key={index}
            className="circle-text"
            style={{ transform: `rotate(${index * (360 / circleText.length)}deg)` }} // Dynamically adjust spacing
          >
            {char}
          </span>
        ))}
      </div>
      {/* Center Play Icon */}
      <span className="absolute text-white text-6xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.752 11.168l-3.197-1.852A1 1 0 0010 10.15v3.7a1 1 0 001.555.832l3.197-1.852a1 1 0 000-1.664z"
          />
        </svg>
      </span>
    </div>
  );
};

StickerCircle.propTypes = {
  circleText: PropTypes.string.isRequired,
};
export default StickerCircle;
