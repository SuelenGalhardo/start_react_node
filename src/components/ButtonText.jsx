import PropTypes from "prop-types";

export function ButtonText({ title, isActive = false, ...rest }) {
  return (
    <button
      className={`buttonText ${isActive ? "active" : "inactive"}`}
      type="button"
      {...rest}
    >
      {title}
    </button>
  );
}

ButtonText.propTypes = {
  title: PropTypes.string.isRequired, // Validación para title

  isActive: PropTypes.bool,  // Validación para isactive
};
