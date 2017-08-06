import React from 'react';
import ReactDOM from 'react-dom';
import { array, object } from 'prop-types';
import Flake from './Flake';
import * as animeMethods from '../libs/anime-methods';

class AnimatedLayout extends React.Component {
  flakeElements = [];

  componentDidMount() {
    console.log("flake element count: ", this.flakeElements.length);
  }

  componentWillAppear(callback) {
    console.log('will appear');
    animeMethods.enterSample1(this.flakeElements, {}, callback);
  }

  componentWillEnter(callback) {
    console.log('will enter');
    animeMethods.enterSample1(this.flakeElements, {}, callback);
  }

  componentWillLeave(callback) {
    console.log('will leave');
    animeMethods.leaveSample1(this.flakeElements, {}, callback);
  }

  render() {
    return <div>
      {
        this.props.items.map(item => 
          <Flake 
            key={item.id}
            refCallback={(el) => this.flakeElements.push(el)}
            item={item}
            option={this.props.option}
            listeners={this.props.listeners}>
          </Flake>
        )
      }
    </div>
  }
}

AnimatedLayout.propTypes = {
  items: array.isRequired,
  option: object.isRequired,
  listeners: object.isRequired
};

export default AnimatedLayout;