import PropTypes from "prop-types";

const Button = ({text,icon}) => {
  return (
    <button className="py-4 px-6 uppercase bg-deep-orange text-white flex justify-center items-center gap-1">
      {text} {icon}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};
export default Button;
