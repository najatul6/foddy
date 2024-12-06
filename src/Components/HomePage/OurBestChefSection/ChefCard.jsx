import PropTypes from "prop-types";

const ChefCard = ({ chef }) => {
  return (
    <div className="rounded-lg overflow-hidden relative">
      <img src={chef.profile} alt="" className="w-full h-full border mx-auto" />
      <div className="absolute bottom-0 w-full text-center bg-deep-black rounded-b-lg border border-t-0  bg-opacity-85">
        <h1 className="text-xl font-bold mt-5 ">{chef.name}</h1>
        <p className="text-gray-400">{chef.designation}</p>
      </div>
    </div>
  );
};

ChefCard.propTypes = {
  chef: PropTypes.object,
};

export default ChefCard;
