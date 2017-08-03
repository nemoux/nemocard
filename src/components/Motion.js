import React from 'react';
import Bodymovin from 'bodymovin';

class Motion extends React.Component {
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

    return <div className='react-bodymovin-component' ref={storeWrapper} />;
  }
}

export default Motion;