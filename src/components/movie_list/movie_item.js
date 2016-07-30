/**
 * Created by ofersarid on 28/07/2016.
 */

import React from 'react';

const MovieItem = ({movie, offset, isSubItem, index, selectMe}) => {

  const bgImage = {
    backgroundImage: 'url(' + movie.image_url + ')'
  };

  return (
    <li is="true"
        data-offset={offset * 176}
        class={isSubItem ? 'movieListItem btn' : 'movieListItem'}
        style={bgImage}
        onClick={() => {
          isSubItem ? selectMe(index) : null
        }}>
      {isSubItem ? null :
        <div className="movieListItem__info">
          <div className="title">{movie.title}</div>
          <div className="divider"/>
          <div className="description">{movie.description}</div>
        </div>
      }
      {isSubItem ? null :
        <a className="movieListItem__link" href={movie.link} target="_blank">Watch the trailer</a>
      }


    </li>
  );
};

export default MovieItem;