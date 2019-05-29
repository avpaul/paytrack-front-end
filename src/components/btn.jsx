import React from 'react';
import propTypes from 'prop-types';

const Btn = ({
  className = '', text, children, handler, ...props
}) => {
  const classNames = ['btn', className].join(' ');
  return (
    <button className={classNames} type="button" onClick={handler} {...props}>
      {text}
      {children}
    </button>
  );
};

Btn.propTypes = {
  handler: propTypes.func.isRequired,
  text: propTypes.string,
  className: propTypes.string.isRequired,
  children: propTypes.element,
};

Btn.defaultProps = {
  text: '',
  children: '',
};

export default Btn;
