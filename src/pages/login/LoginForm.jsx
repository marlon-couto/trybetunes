import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from '../../components/form/Input';
import SubmitButton from '../../components/form/SubmitButton';

export default class Form extends Component {
  render() {
    const { isDisabled, userName, handleChange, handleClick } = this.props;

    return (
      <form>
        <Input
          value={ userName }
          handleChange={ handleChange }
          type="text"
          name="nameInput"
          dataTestId="login-name-input"
        />

        <SubmitButton
          isDisabled={ isDisabled }
          handleClick={ handleClick }
          dataTestId="login-submit-button"
          text="Entrar"
        />
      </form>
    );
  }
}

Form.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
  userName: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};
