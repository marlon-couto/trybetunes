import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProfileInfo extends Component {
  render() {
    const { name, image, description, email } = this.props;

    return (
      <div>
        <div>
          <img
            src={ image }
            alt={ name }
            data-testid="profile-image"
          />

          <p>{name}</p>
          <p>{email}</p>
          <p>{description}</p>
        </div>

        <button type="button">
          <Link to="/profile/edit">Editar perfil</Link>
        </button>
      </div>
    );
  }
}

ProfileInfo.propTypes = {
  description: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
