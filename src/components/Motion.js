import React from 'react';
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
    var options = {};
    options.wrapper = this.wrapper;
    options.renderer = 'svg';
    options.loop = this.props.options.loop;
    options.autoplay = this.props.options.autoplay;
    options.prerender = this.props.options.prerender;
    options.path = this.props.options.path;
    
    this.wrapper.style.width = this.props.width;
    this.wrapper.style.height = this.props.height;
    this.wrapper.draggable = true;
    
    this.animation = Bodymovin.loadAnimation(options);
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
