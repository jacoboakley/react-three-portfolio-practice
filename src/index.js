import * as THREE from 'three';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var height = window.innerHeight,
    width = window.innerWidth;

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 1000 );
      camera.position.set(0, 0, 5);
      camera.lookAt( scene.position )
      scene.add(camera);

var light = new THREE.PointLight( 0xFFFF00 );
      light.position.set( 10, 0, 10 );
      scene.add(light);

var renderer = new THREE.WebGLRenderer();
      renderer.setSize( width, height );
   // renderer.setClearColor(0x2c3e50);
      document.body.appendChild( renderer.domElement);

var geometry = new THREE.BoxGeometry( 2, 2, 2); // give the cube it's dimensions (width, height, depth)
var material = new THREE.MeshLambertMaterial( { color: 0xFF0000, wireframe: false} ); // creates material and gives it a color
var cube1 = new THREE.Mesh( geometry, material ); // crates the cube using the geometry and the material
var cube2 = new THREE.Mesh( geometry, material );
      cube2.position.set(5, -2, -5);
var cube3 = new THREE.Mesh( geometry, material );
      cube3.position.set(-5, -2, -5);


scene.add( cube1, cube2, cube3); // adds the cube to the scene

// Render loop to display cube
function render() {
  requestAnimationFrame( render ); // requestAnimationFrame will pause when the user navigates to a new tab
  cube1.rotation.z += 0.01;
  cube1.rotation.x += 0.01;
  cube1.rotation.y += 0.01;  // Runs every frame giving it the animation

  cube2.rotation.x += 0.01;

  cube3.rotation.y += 0.01;

  renderer.render( scene, camera );
};

render();



// REACT DISPLAY
var Header = React.createClass ({
  render: function() {
    return (
      <div className='header'>
        <div className='title'>
          <img src="https://avatars1.githubusercontent.com/u/19611074?v=3&u=40349c6968cc661e50fa97e1f691c8a7668aecfc&s=140" />
          <ul>
            <li>Jacob Oakley</li>
            <li>Front-end Developer </li>
          </ul>
        </div>
        <ul className='link'>
          <li><a href='https://twitter.com/jacoboakley21' target='_blank'>Stalk Me</a></li>
          <li><a href='http://codepen.io/jacoboakley/' target='_blank'>Judge Me</a></li>
          <li><a href='https://github.com/jacoboakley' target='_blank'>Copy Me</a></li>
          <li><a href='https://www.linkedin.com/in/jacoboakley' target='_blank'>Hire Me</a></li>
        </ul>
      </div>
    )
  }
});


var Main = React.createClass ({
  render: function() {
    return (
      <Header />
    )
  }
});

ReactDOM.render(<Main />, document.getElementById('root'));
