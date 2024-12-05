import PropTypes from "prop-types";

const Button = ({text,icon}) => {
  return (
    <button className="py-2 md:py-4 px-2 md:px-6 uppercase bg-deep-orange text-white font-cormorantGaramond flex justify-center items-center gap-1">
      {text} {icon}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};
export default Button;
