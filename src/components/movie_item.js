/**
 * Created by ofersarid on 28/07/2016.
 */

import React from 'react';

const MovieItem = ({movie}) => {

  const bgImage = {
    backgroundImage: 'url(' + movie.image_url + ')'
  };

  return (
    <li className="movieList-item" style={bgImage}/>
  );
};

export default MovieItem;