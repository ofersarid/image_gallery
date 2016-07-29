import React, {Component} from 'react';
import ImageLoader from './image_loader';
import classNames from 'classnames';

class UploadForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      link: '',
      description: '',
      image_url: ''
    };
  }

  render() {
    var disabled = this.state.title.length === 0 || this.state.link.length === 0 || this.state.description.length === 0 || this.state.image_url.length === 0;
    var classes = classNames('btn', 'btn-primary', 'btn-raised', 'submit', {'disabled': disabled});

    return (
      <div className="appCover" style={{height: window.innerHeight}}>
        <i className="fa fa-times closeMe btn" onClick={this.props.onClose}></i>
        <div id="upload-file-form">
          <h4 className="col-xs-12">Upload Image</h4>
          <input className="form-control" type="text" placeholder="Title" value={this.state.title}
                 onChange={event => this.setState({title: event.target.value})}/>
          <input className="form-control" type="text" placeholder="Link" value={this.state.link}
                 onChange={event => this.setState({link: event.target.value})}/>
          <textarea className="form-control" rows="3" placeholder="Description" value={this.state.description}
                    onChange={event => this.setState({description: event.target.value})}/>
          <ImageLoader url={this.state.image_url} onImageChange={this.renderImage.bind(this)}/>
          <label className={classes}>
            Submit
            <input type="button" disabled={disabled} onClick={this.addMovie.bind(this)}/>
          </label>
        </div>
      </div>
    );
  }

  addMovie() {
    // adding movie to movie_list
    this.props.addMovie(this.state);
    // clear form
    this.setState({
      title: '',
      link: '',
      description: '',
      image_url: ''
    });
    //close Form
    this.props.onClose();
  }

  renderImage(file) {
    var reader = new FileReader(); // generate a new FileReader object

    reader.onload = function (event) {
      var image_url = event.target.result;
      this.setState({image_url});
    }.bind(this);

    reader.readAsDataURL(file); // when the file is read it triggers the onload event above.

  }
}

export default UploadForm;
