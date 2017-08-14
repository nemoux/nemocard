import React from 'react';
import ReactDOM from 'react-dom';
import { func, object } from 'prop-types';
import Image from './Image';
import Video from './Video';
import Motion from './Motion';
import StyledFlake from './StyledFlake';
import * as animeMethods from '../libs/anime-methods';

class AnimatedFlake extends React.Component {
  constructor(props) {
    super(props);
    this.contentElements = [];
    this.listeners = {};
    for (let key in props.listeners) {
      this.listeners[key] = props.listeners[key].bind({
        item: props.item,
        option: props.option
      });
    }

    this.styleParam = {
      option: props.option,
      style: props.item.style,
      order: props.item.id
    };
  }

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
    let { item, option } = this.props;

    const getContent = (content) => {
      let ContentComponent = <div />;

      if (content.type === 'image') {
        ContentComponent = Image;
      } else if (content.type === 'video') {
        ContentComponent = Video;
      } else if (content.type === 'motion') {
        ContentComponent = Motion;
      } else {
        console.error('This content is not supported: ', content.type);
      }

      return <ContentComponent refCallback={el => this.contentElements.push(el)} key={content.id} option={content} />
    }

    const contents = item.contents.sort((a, b) => { return a.id - b.id });
    return (
      <div {...this.listeners}>
        <StyledFlake {...this.styleParam}>
          { contents.map(getContent) }
        </StyledFlake>
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
