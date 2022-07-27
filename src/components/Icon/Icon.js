import React from "react";
import PropTypes from "prop-types";
import MuiIcon from "@mui/material/Icon";

const Icon = ({ icon, className, children, size, fontSize, ...props }) => {
  if (!icon && children) {
    icon = children;
  }
  let baseClass = "";
  let extra = "";
  if (icon.indexOf("fa") !== -1) {
    baseClass = "fa";
    extra = " " + icon;
    children = undefined;
  } else if (icon.indexOf("hci") !== -1) {
    baseClass = "hc-icons";
    extra = " " + icon;
    children = undefined;
  } else if (icon && !children) {
    // fallback to material ui icon set
    children = icon;
  }

  return (
    <MuiIcon
      fontSize={fontSize || size}
      baseClassName={baseClass}
      className={className + extra}
      children={children}
      {...props}
    />
  );
};

Icon.propTypes = {
  ...MuiIcon.propTypes,
  /**
   * What icon to use `fa-trash`, `hci-catalyst-logo`
   */
  icon: PropTypes.string.isRequired,
  /**
   * How large should the icon be?
   */
  size: PropTypes.oneOf(["small", "medium", "large", "inherit"]),
};

Icon.defaultProps = {
  ...MuiIcon.defaultProps,
  icon: "",
  size: "inherit",
  color: "default",
};

export default Icon;
