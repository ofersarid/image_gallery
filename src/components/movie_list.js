/**
 * Created by ofersarid on 28/07/2016.
 */

import React, {Component} from 'react';
import MovieItem from './movie_item';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMovie: 0
    };
  }

  getMedianIndex(n) {
    var isEven = n === parseFloat(n) ? !(n % 2) : void 0;
    return isEven ? n / 2 + 0.5 : (n + 1) / 2;
  }

  createMovieItems(medianIndex, isSubItem) {
    return this.props.movies.map((movie, i) => {
      return (
        <MovieItem movie={movie} key={i} offset={medianIndex - 1 - i} index={i} isSubItem={isSubItem}
                   selectMe={this.selectMovie.bind(this)}/>
      );
    });
  }

  selectMovie(index) {
    this.setState({currentMovie: index});
  }


  render() {
    var subListItemWidth = 176;
    var itemsCount = this.props.movies.length;
    var medianIndex = this.getMedianIndex(itemsCount);

    return (
      <div style={{display: itemsCount ? 'block' : 'none'}} className="movieListContainer">
        <div className="list wideList">
          {this.state.currentMovie > 0 ?
            <i className="fa fa-chevron-left goLeft movieListContainer-navBtn btn" onClick={()=> {
              this.setState({currentMovie: --this.state.currentMovie})
            }}/> : null}
          {this.state.currentMovie < itemsCount - 1 ?
            <i className="fa fa-chevron-right goRight movieListContainer-navBtn btn" onClick={()=> {
              this.setState({currentMovie: ++this.state.currentMovie})
            }}/> : null}
          <ul style={{transform: 'translateX(' + this.state.currentMovie * -100 + '%)'}}>
            {this.createMovieItems(medianIndex, false)}
          </ul>
          <div className="mask">
            <div className="mask__rec left"/>
            <div className="mask__rec right"/>
          </div>
        </div>
        <div style={{display: itemsCount ? 'block' : 'none'}} className="list subList">
          <ul
            style={{transform: 'translateX(' + (medianIndex - 1 - this.state.currentMovie) * subListItemWidth + 'px)'}}>
            {this.createMovieItems(medianIndex, true)}
          </ul>
        </div>
      </div>
    );
  }
}

export default MovieList;