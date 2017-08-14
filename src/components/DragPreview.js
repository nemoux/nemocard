import React from 'react';
import PropTypes from 'prop-types';
import { DragItemTypes } from './Interactable';
import { DragLayer } from 'react-dnd';

const layerStyles = {
  position: 'fixed',
  zIndex: 100,
  left: 0,
  top: 0
};

function getItemStyles(props) {
  const { currentOffset } = props;
  if (!currentOffset) {
    return {
      display: 'none'
    };
  }

  const { x, y } = currentOffset;
  const transform = `translate(${x}px, ${y}px)`;
  return {
    position: 'fixed',
    left: 0,
    top: 0,
    opacity: 0.5,
    backgroundColor: 'yellow',
    transform: transform
  };
}

function collect(monitor) {
  return {
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging()
  };
}

class CustomDragLayer extends React.Component {
  render() {
    const { item, itemType, isDragging } = this.props;
    if (!isDragging) {
      return null;
    }

     
    let previewContent = item.id;
    if (item.preview.type === 'image') {
      previewContent = <img src={item.preview.src} width="100%" />
    } else if (item.preview.type === 'video') {
      previewContent = <video src={item.preview.src} width="100%" loop autoPlay />
    } else {
      console.error('not supported type: ', item.preview.type);
    } 

    return (
      <div style={getItemStyles(this.props)}>
        {previewContent}
      </div>
    );
  }
}

CustomDragLayer.propTypes = {
  item: PropTypes.object,
  itemType: PropTypes.string,
  currentOffset: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }),
  isDragging: PropTypes.bool.isRequired
};

export default DragLayer(collect)(CustomDragLayer);