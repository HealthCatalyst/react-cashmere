import React from 'react';
import PropTypes from 'prop-types';
import MuiIcon from '@mui/material/Icon';
import './Icon.scss';

export const iconSizes = ['inherit', 'small', 'medium', 'large'];
const iconSizeMap = {
    small: "hc-icon hc-icon-sm",
    medium: "hc-icon hc-icon-md",
    large: "hc-icon hc-icon-lg",
    inherit: "hc-icon",
};

const Icon = ({icon, className, children, size, fontSize, ...props}) => {
    if(!icon && children) {
        icon = children;
    }
    let baseClass = undefined;
    let extra = "";
    if(icon.indexOf("fa") !== -1) {
        baseClass = "fa";
        extra = " " + icon;
        children = undefined
    }
    else if(icon.indexOf("hci") !== -1) {
        baseClass = "hc-icons";
        extra = " " + icon;
        children = undefined
    }
    else if(icon && !children) {
        // fallback to material ui icon set
        children = icon;
    }

    return (
        <MuiIcon 
            classes={{root: iconSizeMap[fontSize || size]}} 
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
    size: PropTypes.oneOf(iconSizes),
    /**
     * What color to use
     */
    color: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'error', 'info', 'default']),
};
  
Icon.defaultProps = {
    ...MuiIcon.defaultProps,
    icon: '',
    size: 'inherit',
    color: 'default'
};

export default Icon;