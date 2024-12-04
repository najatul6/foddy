import "./Circel.css"; // Import your CSS file here

const Circel = () => {
  return (
    <div className="relative flex items-center justify-center w-64 h-64 rounded-full border-2 border-gray-300">
      <div className="absolute w-full h-full animate-spin-slow">
        <p className="text-circle text-gray-700">
          Circular Text Example · Circular Text Example ·
        </p>
      </div>
    </div>
  );
};

export default Circel;
