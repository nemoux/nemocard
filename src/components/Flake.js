import React from 'react';
import ReactDOM from 'react-dom';
import ReactTransitionGroup from 'react-addons-transition-group';
import { func, bool } from 'prop-types';
import AnimatedFlake from './AnimatedFlake';

import { getEmptyImage } from 'react-dnd-html5-backend';
import { Draggable, DragItemTypes } from './Interactable';

const option = {
  type: DragItemTypes.FLAKE,
  spec: {
    beginDrag(props, monitor, component) {
      console.log('begin drag!')
      // TODO we need to pass transformed element's data, 
      // so that DragPreview makes its preview transform properly.
      return { ...props.item };
    },
    endDrag(props, monitor) {
      console.log('end drag!');
      if (!monitor.didDrop()) {
        return;
      }

      console.log('result: ', monitor.getDropResult());
      if (props.item.link.type === 'url') {
        //window.open(props.item.link.value, "_blank");
        window.alert(`card${props.item.id} dropped!`);
      }
    }
  },
  collect: (connect, monitor) => {
    return {
      connectDragSource: connect.dragSource(),
      connectDragPreview: connect.dragPreview(),
      isDragging: monitor.isDragging()
    };
  }
};

class Flake extends React.Component {
  componentDidMount() {
    this.props.connectDragPreview(getEmptyImage(), {
      captureDraggingState: true,
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    // TODO we need to check if props, state changed or not
    // This func should return only true if only needed.
    return true;
  }

  render() {
    const { connectDragSource, isDragging } = this.props;

    return connectDragSource(
      <div>
        <ReactTransitionGroup key="AnimatedFlake" component='div'>
          <AnimatedFlake {...this.props} />
        </ReactTransitionGroup>
      </div>
    );
  }
}

Flake.propTypes = {
  connectDragSource: func.isRequired,
  connectDragPreview: func.isRequired,
  isDragging: bool.isRequired
}

export default Draggable(Flake, option);