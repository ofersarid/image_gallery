import React, {Component} from 'react';

class ImageLoader extends Component {

  constructor(props) {
    super(props);

    this.state = {
      thumbUrl: {
        backgroundImage: 'url(' + props.url + ')',
      }
    };
  }

  render() {
    var thumbUrl = {backgroundImage: 'url(' + this.props.url + ')'};
    return (
      <div className="thumb img-thumbnail form-control" style={thumbUrl}>
        <div className="btn">
          <div className="circle-container">
            <i className="fa fa-upload upload-icon"/>
            <span>Upload Image</span>
          </div>
          <input type="file" onChange={event => this.renderImage(event.target.files[0])}/>
        </div>
      </div>
    );
  }

  renderImage(file) {
    let self = this;
    self.props.onImageChange(file);
    // let promise = new Promise((resolve)=>{
    //   self.props.onImageChange(file, resolve);
    // });
    // promise.then((image_url) => {
    //   self.setState({
    //     thumbUrl: {
    //       backgroundImage: 'url(' + image_url + ')'
    //     }
    //   });
    // });
  }
}

export default ImageLoader;
