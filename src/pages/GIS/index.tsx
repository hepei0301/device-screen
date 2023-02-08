import React, { useEffect, useState } from 'react';
import * as Cesium from 'cesium';
import 'cesium/Build/Cesium/Widgets/widgets.css';

function GIS() {
  useEffect(() => {
    const container = document.getElementById('gisContainerModal') as any;

    // gisv.camera.frustum.fov = Math.toRadians(40);
    // gisv.viewerConfig.setGlobeVisible(false);
    Cesium.Ion.defaultAccessToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmMmFmMTEyMy1kZWUyLTQ3MTYtYmFjYy01MjAwNzhhYzJhMTYiLCJpZCI6MTIyNzE2LCJpYXQiOjE2NzUwNjExMzR9.x5wgPZ6KcuQaYBeA5G3aow3C5cr-C7oHUAhUfoUuNNs';

    const gisv = new Cesium.Viewer('gisContainerModal', {
      infoBox: false,
      selectionIndicator: false,
      shadows: true,
      shouldAnimate: true,
    });
  }, []);

  return <div id="gisContainerModal"></div>;
}

export default GIS;
