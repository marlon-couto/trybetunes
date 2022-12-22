import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Loading from '../../components/Loading';

export default class SearchResult extends Component {
  render() {
    const { isLoading, searchResponse, artist } = this.props;

    if (searchResponse.length === 0) return <p>Nenhum álbum foi encontrado</p>;

    return (
      <div>
        <p>{`Resultado de álbuns de: ${artist}`}</p>

        {isLoading ? (
          <Loading />
        ) : (
          searchResponse.map((album) => {
            const { artistName, collectionId, collectionName, artworkUrl100 } = album;
            return (
              <div key={ collectionId }>
                <img
                  src={ artworkUrl100 }
                  alt={ collectionName }
                />
                <h3>
                  <Link
                    to={ `/album/${collectionId}` }
                    data-testid={ `link-to-album-${collectionId}` }
                  >
                    {collectionName}
                  </Link>
                </h3>
                <h4>{artistName}</h4>
              </div>
            );
          })
        )}
      </div>
    );
  }
}

SearchResult.propTypes = {
  searchResponse: PropTypes.arrayOf(
    PropTypes.shape({
      artistName: PropTypes.string,
      artworkUrl100: PropTypes.string,
      collectionName: PropTypes.string,
      collectionId: PropTypes.number,
    }),
  ).isRequired,
  artist: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
