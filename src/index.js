import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import UploadForm from './components/uploader/upload_form';
import MovieList from './components/movie_list/movie_list';
import NavBar from './components/nav_bar/nav_bar';

// Create a new component. This component should produce some HTML.

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: JSON.parse(localStorage.getItem("movies")) || [],
      selectedMovie: null,
      showForm: false
    };
  }

  render() {

    return (
      <div>
        <NavBar openForm={this.openForm.bind(this)}/>
        <MovieList movies={this.state.movies}/>
        {this.state.showForm ? <UploadForm addMovie={this.addMovie.bind(this)} onClose={this.closeForm.bind(this)}/> : false}
      </div>
    );
  }

  addMovie(movie) {
    console.log(movie);
    // update state by adding new movie
    this.setState({
      movies: this.state.movies.concat([movie])
    }, () => {
      localStorage.setItem("movies", JSON.stringify(this.state.movies));
    });
  }

  closeForm() {
    this.setState({showForm: false})
  }

  openForm() {
    this.setState({showForm: true})
  }

}


// Take this components generated HTML and put it on the page (in the DOM).
ReactDOM.render(<App />, document.querySelector('#app-main'));

// init material design
$.material.init();
