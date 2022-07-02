import React from 'react';
import PropTypes from 'prop-types';
import MuiIconButton from '@mui/material/IconButton';
import {buttonSizes, buttonSizesShort, buttonColors} from "../Button/Button";
import './IconButton.scss';
import Icon from '../Icon/Icon';

export const iconNames = [];
const IconButton = ({ color, size, children, variant, icon, ...props }) => {
  const classNames = ["hc-icon-button"];
  if(buttonColors.includes(color)) {
    classNames.push('hc-' + color); 
    color="inherit";
  }
  
  if(buttonSizes.includes(size)) {
    classNames.push('hc-' + buttonSizesShort[buttonSizes.indexOf(size)]);
  }

  if(typeof icon === "string" && !children) {
    children = <Icon icon={icon} size={size} />
  }

  return (
    <MuiIconButton
      classes={{root: classNames.join(' ')}}
      color={color}
      size={size}
      {...props}
      disableFocusRipple
      disableRipple
    >
      {children}
    </MuiIconButton>
  );
};

IconButton.propTypes = {
  ...MuiIconButton.propTypes,
  /**
   * What color to use
   */
  color: PropTypes.oneOf(buttonColors),
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(buttonSizes),
};

IconButton.defaultProps = {
  ...MuiIconButton.defaultProps,
  color: 'default',
  size: 'medium',
  disabled: false,
};

export default IconButton;







