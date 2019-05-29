import React, { Component } from 'react';
import propTypes from 'prop-types';
import './select.scss';

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      hasValue: false,
      value: '',
    };
  }

  render() {
    const {
      className, id, onChange, label, name, options,
    } = this.props;
    const { isActive, hasValue, value } = this.state;
    let classNames = 'input-field input-field-select';
    classNames = isActive ? classNames.concat(' ', 'active') : classNames;
    classNames = hasValue ? classNames.concat(' ', 'hasValue') : classNames;
    return (
      <div className={classNames}>
        <label htmlFor={id} className={className}>
          {label}
          <input
            id={id}
            type="text"
            onFocus={() => {
              this.setState({ isActive: true });
            }}
            // onBlur={(event) => {
            //   if (event.target.value.trim() === '') {
            //     this.setState({ isActive: false, hasValue: false });
            //   } else {
            //     this.setState({ isActive: false, hasValue: true });
            //   }
            // }}
            name={name}
            defaultValue={value}
          />
        </label>
        <i className="material-icons icon">arrow_drop_down</i>
        {isActive && (
          <div className="input-select-options">
            <ul>
              {options.map(option => (
                <li
                  key={option}
                  onClick={() => {
                    this.setState({ value: option, isActive: false, hasValue: true });
                    onChange(option, name);
                  }}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}
Select.propTypes = {
  label: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  options: propTypes.arrayOf(propTypes.string).isRequired,
  className: propTypes.string,
  id: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};

Select.defaultProps = {
  className: '',
};

export default Select;
