import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NameInput extends Component {
  render() {
    const { handleChange, value, type, name, dataTestId } = this.props;

    return (
      <div>
        <label htmlFor="nameInput">
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

NameInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
};
