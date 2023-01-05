import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from '../../components/form/Input';
import SubmitButton from '../../components/form/SubmitButton';

export default class ProfileEditForm extends Component {
  render() {
    const {
      handleClick,
      isDisabled,
      handleChange,
      name,
      description,
      email,
      image,
    } = this.props;

    return (
      <form>
        <Input
          type="text"
          name="name"
          handleChange={ handleChange }
          value={ name }
          dataTestId="edit-input-name"
          text="Nome: "
        />

        <Input
          type="email"
          name="email"
          handleChange={ handleChange }
          value={ email }
          dataTestId="edit-input-email"
          text="Email: "
        />

        <Input
          type="text"
          name="description"
          handleChange={ handleChange }
          value={ description }
          dataTestId="edit-input-description"
          text="Descrição do perfil: "
        />

        <Input
          type="text"
          name="image"
          handleChange={ handleChange }
          value={ image }
          dataTestId="edit-input-image"
          text="Imagem do perfil: "
        />

        <SubmitButton
          text="Editar perfil"
          isDisabled={ isDisabled }
          handleClick={ handleClick }
          dataTestId="edit-button-save"
        />
      </form>
    );
  }
}

ProfileEditForm.propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};
