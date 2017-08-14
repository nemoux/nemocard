import * as dnd from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import TouchBackend from 'react-dnd-touch-backend';

export function Interactable(RootComponent, backend = 'html5') {
  let dndBackend = null;

  if (backend === 'html5') {
    dndBackend = HTML5Backend;
  } else if (backend === 'touch') {
    dndBackend = TouchBackend({ enableMouseEvents: true });
  } else {
    console.error('this dnd backend not supported');
    return RootComponent;
  }

  return dnd.DragDropContext(dndBackend)(RootComponent);
}

export function Draggable(Component, option) {
  return dnd.DragSource(option.type, option.spec, option.collect)(Component);
}

export function Droppedable(Component, option) {
  return dnd.DropTarget(option.type, option.spec, option.collect)(Component);
}

export const DragItemTypes = { 
  FLAKE: 'flake'
}