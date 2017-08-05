import React from 'react';
import ReactDOM from 'react-dom';

class Video extends React.Component {
  style = {
    width: "100%",
    position: 'absolute',
    left: '0px',
    top: '0px'
  }

  componentDidMount() {
    this.props.refCallback(ReactDOM.findDOMNode(this));
  }

  render() {
    return (
      <video {...this.props.option} style={{...this.style}} loop autoPlay>
        <source src={this.props.src} type="video/mp4" />
        Your browser does not support the video tag
      </video>
    );
  }

}

export default Video; 