import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SubmitButton extends Component {
  render() {
    const { isDisabled, handleClick } = this.props;

    return (
      <div>
        <button
          type="button"
          id="submitButton"
          name="submitButton"
          disabled={ isDisabled }
          onClick={ handleClick }
          data-testid="login-submit-button"
        >
          Entrar
        </button>
      </div>
    );
  }
}

SubmitButton.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};
