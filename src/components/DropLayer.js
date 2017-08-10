import React from 'react';

import { Droppedable, DragItemTypes } from './Interactable';

let option = {
  type: DragItemTypes.FLAKE,
  spec: {
    drop(props, monitor) {
      console.log('dropped!');
      return monitor.getClientOffset()
    },
    hover(props, monitor) {
      console.log('isover: ', monitor.isOver());
    }
  },
  collect: (connect, monitor) => {
    return {
      connectDropTarget: connect.dropTarget(),
      isOver: monitor.isOver()
    };
  }
};

class DropLayer extends React.Component {
  constructor(props) {
    super(props);
    option.type = props.dragType || DragItemTypes.FLAKE ;
  }

  render() {
    const { connectDropTarget } = this.props;
    const style = this.props.style ||  {
      // This component is flexbox item, and fitted to whole viewport
      position: "absolute",
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    };
    return connectDropTarget(
      <div style={style} />
    );
  }
}

export default Droppedable(DropLayer, option);