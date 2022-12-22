import React, { Component } from 'react';

import Header from '../../components/layout/Header';

export default class ProfileEdit extends Component {
  render() {
    return (
      <div data-testid="page-profile-edit">
        <Header />
        <p>Edit Profile</p>
      </div>
    );
  }
}
