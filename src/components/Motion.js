import React from 'react';
import ReactDOM from 'react-dom';
import Bodymovin from 'bodymovin';

class Motion extends React.Component {
  constructor(props) {
    super(props);
    this.style = {
      width: "100%",
      position: 'absolute',
      left: '0px',
      top: '0px'
    };
  }

  componentDidMount () {
    var option = {};
    option.wrapper = this.wrapper;
    option.renderer = 'svg';
    option.loop = this.props.option.loop;
    option.autoplay = this.props.option.autoplay;
    option.prerender = this.props.option.prerender;
    option.path = this.props.option.src;
    
    this.wrapper.style.width = this.props.width;
    this.wrapper.style.height = this.props.height;
    this.wrapper.draggable = true;
    
    this.animation = Bodymovin.loadAnimation(option);
    this.props.refCallback(ReactDOM.findDOMNode(this));
  }

  componentWillUnmount () {
    this.animation.destroy();
  }

  shouldComponentUpdate () {
    return false;
  }

  render () {
    const storeWrapper = (el) => {
      this.wrapper = el;
    }

    return <div className='react-bodymovin-component' style={this.style} ref={storeWrapper} />
  }
}

export default Motion;
