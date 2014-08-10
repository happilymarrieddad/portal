time();
function time()
{
    var renderer = new THREE.WebGLRenderer();

    var renWidth = 800;
    var renHeight = 500;

    renderer.setSize( renWidth, renHeight );
    var container = document.getElementById('jsbox');
    container.appendChild(renderer.domElement);

    var fieldOfView = 75;
    var nearClippingPlane = 1;
    var farClippingPlane = 1000;

    var camera = new THREE.PerspectiveCamera( fieldOfView, window.innerWidth / window.innerHeight, nearClippingPlane, farClippingPlane );

    camera.position.y = -250;
    camera.position.z = 100;
    camera.rotation.x = .85;

    var scene = new THREE.Scene();

    var plane = new THREE.Mesh(new THREE.PlaneGeometry(300,300), new THREE.MeshNormalMaterial());

    var cube = new THREE.Mesh(new THREE.CubeGeometry(100,100,100), new THREE.MeshNormalMaterial());
    var cube2 = new THREE.Mesh(new THREE.CubeGeometry(100,100,100), new THREE.MeshNormalMaterial());

    var angularSpeed = 0.4;
    var lastTime = 0;

    function animate()
    {
        var time = (new Date()).getTime();
        var timeDiff = time - lastTime;
        var change = angularSpeed * timeDiff * 2 * Math.PI / 1000;
        cube.rotation.z = change;
        cube2.rotation.z += change;
        renderer.render(scene, camera);

        requestAnimationFrame(function() {
            animate();
        });
    }

    cube.rotation.z = 45 * (Math.PI / 180);
    cube.position.x = 120;

    scene.add(plane);
    scene.add(cube);
    scene.add(cube2);

    animate();
}