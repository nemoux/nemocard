
import React from 'react';
import ReactDOM from 'react-dom';
import { func, object } from 'prop-types';
import Image from './Image';
import Video from './Video';
import Motion from './Motion';
import * as animeMethods from '../libs/anime-methods';

class AnimatedFlake extends React.Component {
  contentElements = [];

  componentDidMount() {
    console.log("content element count: ", this.contentElements.length);
    this.props.refCallback(ReactDOM.findDOMNode(this));
  }

  componentWillAppear(callback) {
    console.log('will appear');
    animeMethods.enterSample3(this.contentElements, {}, callback);
  }

  componentWillEnter(callback) {
    console.log('will enter');
    animeMethods.enterSample3(this.contentElements, {}, callback);
  }

  componentWillLeave(callback) {
    console.log('will leave');
    animeMethods.leaveSample1(this.contentElements, {}, callback);
  }

  render() {
    const { item, option, listeners } = this.props;

    const getContent = (target) => {
      let ContentComponent = <div />;

      if (target.type === 'image') {
        ContentComponent = Image;
      } else if (target.type === 'video') {
        ContentComponent = Video;
      } else if (target.type === 'motion') {
        ContentComponent = Motion;
      } else {
        console.error('This content is not supported: ', target.type);
      }

      return <ContentComponent refCallback={el => this.contentElements.push(el)} key={target.id} option={target} />
    }

    const contents = item.contents.sort((a, b) => { return a.id - b.id });

    return (
      <div {...listeners}>
        { contents.map(getContent) }
      </div>
    );
  }
}

AnimatedFlake.propTypes = {
  item: object.isRequired,
  option: object.isRequired,
  listeners: object.isRequired,
  refCallback: func.isRequired
};

export default AnimatedFlake;