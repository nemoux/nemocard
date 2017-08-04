const { webFrame } = require('electron');

function disablePinchZoom() {
  // disable pinch zoom on the app
  console.log('disable pinch zoom');
  webFrame.setVisualZoomLevelLimits(1, 1);
}

export { disablePinchZoom };