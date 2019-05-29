import React, { Component } from 'react';
import propTypes from 'prop-types';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      hasValue: false,
    };
  }

  render() {
    const {
      className, id, onChange, label, name, type, ...props
    } = this.props;
    const { isActive, hasValue } = this.state;
    let classNames = 'input-field';
    classNames = isActive ? classNames.concat(' ', 'active') : classNames;
    classNames = hasValue ? classNames.concat(' ', 'hasValue') : classNames;
    return (
      <div className={classNames}>
        <label htmlFor={id} className={className}>
          {label}
          <input
            id={id}
            type={type}
            onChange={event => onChange(event.target.value, name)}
            onFocus={() => {
              this.setState({ isActive: true, hasValue: true });
            }}
            onBlur={(event) => {
              if (event.target.value.trim() === '') {
                this.setState({ isActive: false, hasValue: false });
              } else {
                this.setState({ isActive: false, hasValue: true });
              }
            }}
            name={name}
            {...props}
          />
        </label>
      </div>
    );
  }
}
Input.propTypes = {
  label: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  className: propTypes.string,
  id: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};

Input.defaultProps = {
  className: '',
};

export default Input;
