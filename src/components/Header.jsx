import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

export default class Header extends Component {
  state = {
    loggedUser: '',
    isLoading: true,
  };

  async componentDidMount() {
    const userFound = await getUser();

    this.setState({
      loggedUser: userFound,
      isLoading: false,
    });
  }

  render() {
    const {
      loggedUser: { name },
      isLoading,
    } = this.state;

    return (
      <header data-testid="header-component">
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

        {isLoading ? <Loading /> : <p data-testid="header-user-name">{name}</p>}
      </header>
    );
  }
}
