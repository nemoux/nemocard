import React from 'react';
import ReactDOM from 'react-dom';

class Image extends React.Component {
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
      <img {...this.props.option} style={{...this.style}} />
    );
  }
}

export default Image