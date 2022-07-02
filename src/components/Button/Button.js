import React from 'react';
import PropTypes from 'prop-types';
import MuiButton from '@mui/material/Button';
import './Button.scss';

export const buttonSizes = ['small', 'medium', 'large'], buttonSizesShort = ['sm', 'md', 'lg'];
export const buttonColors = [
  // hc colors
  'primary-action', 'primary-alt-action', 'destructive', 'neutral',  'minimal', 'link', 'link-inline',
  // mui colors
  'primary', 'secondary', 'success', 'warning', 'info', 'error', 'default',
  // misc colors
  'blue', 'green', 'purple', 'red', 'orange', 'ruby-red', 'deep-red', 'red-orange', 'magenta', 'pink', 'light-pink', 'azure', 'teal', 'dark-green', 'brown', 'purple-gray', 'yellow', 'yellow-orange', 'tan'
];

const Button = ({ color, size, children, variant, ...props }) => {
  const classNames = ["hc-button"];
  if(buttonColors.includes(color)) {
    classNames.push('hc-' + color); 
    color="primary";
  }
  
  if(buttonSizes.includes(size)) {
    classNames.push('hc-' + buttonSizesShort[buttonSizes.indexOf(size)]);
    size="medium";
  }

  return (
    <MuiButton
      variant="contained"
      className={classNames.join(' ')}
      color={color}
      disableElevation
      disableRipple
      size={size}
      {...props}
    >
      {children}
    </MuiButton>
  );
};

Button.propTypes = {
  ...MuiButton.propTypes,
  /**
   * What background color to use
   */
  color: PropTypes.oneOf(buttonColors),
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(buttonSizes),
};

Button.defaultProps = {
  ...MuiButton.defaultProps,
  color: 'primary-action',
  size: 'medium',
  disabled: false,
};

export default Button;







