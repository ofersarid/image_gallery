import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import UploadForm from './components/upload_form';
import MovieList from './components/movie_list'

// Create a new component. This component should produce some HTML.

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      selectedMovie: null,
      showForm: false
    };
  }

  render() {

    return (
      <div>
        <label className="btn btn-primary form-control">
          Add
          <input type="button" onClick={()=>{this.setState({showForm: true})}}/>
        </label>
        {this.state.showForm ? <UploadForm addMovie={this.addMovie.bind(this)} onClose={this.closeForm.bind(this)}/> : false}
        <MovieList movies={this.state.movies}/>
      </div>
    );
  }

  addMovie(movie) {
    console.log(movie);
    // update state by adding new movie
    this.setState({
      movies: this.state.movies.concat([movie])
    })
  }

  closeForm() {
    this.setState({showForm: false})
  }

}


// Take this components generated HTML and put it on the page (in the DOM).
ReactDOM.render(<App />, document.querySelector('#app-main'));
