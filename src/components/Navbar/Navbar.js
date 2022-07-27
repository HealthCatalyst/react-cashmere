import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";

const Navbar = ({
  appIcon,
  brandIcon,
  homeUri,
  cobrandIcon,
  position,
  children,
  cobrandColor,
  linkContent,
  rightContent,
  ...props
}) => {
  // TODO: add mobile menu and "more" rollup button
  return (
    <>
      <div className={`hc-navbar ${position === "fixed" ? "fixed-top" : ""}`}>
        <nav className="hc-navbar">
          <div className="navbar-brand">
            {brandIcon && (
              <a href={homeUri} className="brand" tabIndex="-1">
                {typeof brandIcon === "string" ? (
                  <img src={brandIcon} alt="Brand Icon" />
                ) : (
                  brandIcon
                )}
              </a>
            )}
          </div>
          <div className="navbar-app">
            {appIcon && (
              <a href={homeUri} className="app">
                {typeof appIcon === "string" ? (
                  <img src={appIcon} alt="App Icon" />
                ) : (
                  appIcon
                )}
              </a>
            )}
          </div>
          <div className="hc-navbar-link-container">{linkContent}</div>
          {children}
          <div className="hc-navbar-right-container">{rightContent}</div>
          {cobrandIcon && (
            <div
              className={`hc-navbar-cobrand ${
                "hc-navbar-cobrand-" + cobrandColor
              }`}
            >
              {typeof cobrandIcon === "string" ? (
                <img alt="Cobrand Icon" src={cobrandIcon} />
              ) : (
                cobrandIcon
              )}
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

Navbar.propTypes = {
  ...AppBar.propTypes,
  /**
   * How the app bad is positioned in the ui.
   */
  position: PropTypes.oneOf(["fixed", "relative"]),
  /**
   * an array of anything
   */
  linkContent: PropTypes.any,
  /**
   * an array of anything
   */
  rightContent: PropTypes.any,
  /**
   * The app icon/image.
   */
  appIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
  /**
   * The brand icon/image.
   */
  brandIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
  /**
   * A cobrand icon/image.
   */
  cobrandIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
  /**
   * Background color for cobrand image.
   */
  cobrandColor: PropTypes.oneOf(["light", "dark"]),
  /**
   * When the brand logo is clicked where does it link to.
   */
  homeUri: PropTypes.string,
};

Navbar.defaultProps = {
  ...AppBar.defaultProps,
  position: "relative",
  appIcon: "",
  brandIcon: "",
  homeUri: "",
  cobrandIcon: "",
  cobrandColor: "light",
};

export default Navbar;
