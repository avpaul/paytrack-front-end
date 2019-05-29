import React from 'react';
import propTypes from 'prop-types';
import './dialog.scss';

const Dialog = ({ children, classNames, isActive }) => {
  const className = `modal ${classNames}`;
  const style = { maxWidth: '400px', top: '25%' };
  return (
    <div className={`modal-highlight ${isActive && 'active'}`}>
      <div className={className} role="presentation" style={style}>
        {children}
      </div>
    </div>
  );
};

Dialog.propTypes = {
  isActive: propTypes.bool.isRequired,
  children: propTypes.arrayOf(propTypes.any).isRequired,
  classNames: propTypes.string.isRequired,
};

export default Dialog;
