

/* Setup */
var scene = new THREE.Scene();

var fieldOfView = 75;
var nearClippingPlane = 0.1;
var farClippingPlane = 1000;

var windowWMax = window.innerWidth/150;
var windowHMax = window.innerHeight/150;

var camera = new THREE.PerspectiveCamera( fieldOfView, window.innerWidth / window.innerHeight, nearClippingPlane, farClippingPlane );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

/* Colors */
var green = 0x00ff00;
var blue = 0x0000ff;
var red = 0xff0000;


/* Building Objects */
var geometry = new THREE.BoxGeometry(1,1,1);
var material = new THREE.MeshBasicMaterial( { color: green } );
var cube = new THREE.Mesh( geometry, material );
var geometry = new THREE.BoxGeometry(1,1,1);
var material = new THREE.MeshBasicMaterial( { color: blue } );
var cube2 = new THREE.Mesh( geometry, material );


/* Add objects to scene */
scene.add( cube );
scene.add( cube2 );

/* Setting up camera */
camera.position.z = 10;


/* Run 3D Program */
function render() {

    /* Render the box itself */
    requestAnimationFrame(render);
    renderer.render(scene, camera);

    /* Adding rotation */
    cube.rotation.x -= 0.05;
    cube.rotation.y -= 0.05;
    cube.rotation.z += 0.01;

    cube.position.x += 0.1;
    cube.position.y += 0.1;
    cube.position.z += 1;
    if(cube.position.x > windowWMax)
    {
        cube.position.x = -windowWMax
    }
    if(cube.position.y > windowHMax)
    {
        cube.position.y = -windowHMax
    }
    if(cube.position.z > 0)
    {
        cube.position.z = -50
    }

    cube2.rotation.x += 0.05;
    cube2.rotation.y += 0.05;
    cube2.rotation.z -= 0.01;

    /*
    cube2.position.x += 0.1;
    cube2.position.y += 0.1;
    cube2.position.z -= 1;
    if(cube2.position.x > windowWMax)
    {
        cube2.position.x = -windowWMax
    }
    if(cube2.position.y > windowHMax)
    {
        cube2.position.y = -windowHMax
    }
    if(cube2.position.z < -50)
    {
        cube2.position.z = 0
    }*/

    camera.position.z += 0.1;
    if(camera.position.z > 20)
    {
        camera.position.z = -20;
    }
}

/* Render scene */
render();

