/**
 * Created by ofersarid on 28/07/2016.
 */

import React, {Component} from 'react';
import MovieItem from './movie_item'

class MovieSubList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0
    }
  }


  render() {
    var movieItems = this.props.movies.map((movie, i) => {
      return (
        <MovieItem movie={movie} key={i} offset={this.props.movies.length/2}/>
      );
    });
    return (
      <div style={{display: movieItems.length ? 'block' : 'none'}} className="movieSubList">
        <ul className="movieSubList__list" style={{transform: 'translateX('+this.state.position+'px)'}}>
          {movieItems}
        </ul>
      </div>
    );
  }


}

export default MovieSubList;