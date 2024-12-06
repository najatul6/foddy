import PropTypes from "prop-types";

const SectionHeader = ({ heading, subHeading, white }) => {
  return (
    <>
      <h2
        className={`font-semibold uppercase tracking-[4px] ${
          white ? "text-white" : "text-deep-orange"
        }`}
      >
        {subHeading}
      </h2>
      <h1 className="text-5xl font-bold font-cormorantGaramond text-white mt-[10px]">
        {heading}
      </h1>
    </>
  );
};

SectionHeader.propTypes = {
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
  white: PropTypes.string,
};

export default SectionHeader;
