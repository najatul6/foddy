import "./StickerCircle.css"; // Import your CSS file here

const StickerCircle = () => {
  return (
    <div className="relative flex items-center justify-center w-64 h-64 rounded-full border-2 border-gray-300">
      {/* Circular Text */}
      <div className="absolute w-full h-full animate-spin-slow">
        <p className="text-circle text-gray-700">
          Circular Text Example · Circular Text Example ·
        </p>
      </div>
      {/* Middle Letter */}
      <span className="absolute text-4xl font-bold text-gray-800">N</span>
    </div>
  );
};

export default StickerCircle;
