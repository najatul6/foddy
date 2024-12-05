import PropTypes from "prop-types"

const SectionTitle = ({heading}) => {
  return (
    <h5 className="font-semibold uppercase tracking-[4px]">
        {heading}
    </h5>
  )
}

SectionTitle.propTypes = {
  heading: PropTypes.string.isRequired
}

export default SectionTitle