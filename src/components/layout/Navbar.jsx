import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <li>
          <Link
            data-testid="link-to-search"
            to="/search"
          >
            Pesquisar
          </Link>
        </li>
        <li>
          <Link
            data-testid="link-to-favorites"
            to="/favorites"
          >
            Músicas favoritas
          </Link>
        </li>
        <li>
          <Link
            data-testid="link-to-profile"
            to="/profile"
          >
            Perfil
          </Link>
        </li>
      </nav>
    );
  }
}
