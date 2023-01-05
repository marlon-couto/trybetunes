import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const { handleChange, value, type, name, dataTestId, text } = this.props;

    return (
      <div>
        <label htmlFor={ name }>
          { text }
          <input
            type={ type }
            name={ name }
            id={ name }
            onChange={ handleChange }
            value={ value }
            data-testid={ dataTestId }
          />
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  text: PropTypes.string,
};

Input.defaultProps = {
  text: '',
};
