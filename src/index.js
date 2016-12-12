import * as THREE from 'three';
import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './index.css';

// THREE.js THREE.js THREE.js THREE.js
var width = window.innerWidth;
var height = window.innerHeight;

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 45, width/height, 0.01, 500);
  camera.position.z = 300;
  camera.lookAt(scene.position);

var renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);
  document.body.appendChild( renderer.domElement);

var geometry = new THREE.SphereGeometry(50, 16, 16); // radius, segments, rings
var material = new THREE.MeshLambertMaterial( { color: 0xCC0000 });
  material.wireframe = true;
var sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);

var light = new THREE.PointLight(0xFFFFFF);
  light.position.set(10, 50, 150);
  scene.add(light);


function render() {
  requestAnimationFrame( render );
  sphere.rotation.y += 0.01;

  renderer.render( scene, camera );
};

render();

// REACT REACT REACT REACT

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React with THREE.js</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/index.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
