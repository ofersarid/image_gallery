/**
 * Created by ofersarid on 28/07/2016.
 */

import React, {Component} from 'react';
import MovieItem from './movie_item'

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0
    }
  }


  render() {
    var movieItems = this.props.movies.map((movie, i) => {
      return (
        <MovieItem movie={movie} key={i}/>
      );
    });
    return (
      <div style={{display: movieItems.length ? 'block' : 'none'}} className="movieListContainer">
        <i className="fa fa-chevron-left goLeft movieListContainer-navBtn btn" onClick={()=>{this.setState({position: this.state.position + 100})}}/>
        <i className="fa fa-chevron-right goRight movieListContainer-navBtn btn" onClick={()=>{this.setState({position: this.state.position - 100})}}/>
        <ul className="movieList" style={{transform: 'translateX('+this.state.position+'%)'}}>
          {movieItems}
        </ul>
      </div>
    );
  }

  next() {

  }

  prev() {

  }


}

export default MovieList;