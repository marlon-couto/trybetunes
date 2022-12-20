import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NameInput extends Component {
  render() {
    const { handleChange, userName } = this.props;

    return (
      <div>
        <label htmlFor="nameInput">
          <input
            type="text"
            name="nameInput"
            id="nameInput"
            onChange={ handleChange }
            value={ userName }
            data-testid="login-name-input"
          />
        </label>
      </div>
    );
  }
}

NameInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
};
