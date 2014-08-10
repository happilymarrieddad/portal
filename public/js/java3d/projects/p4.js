lambertmaterial();

function lambertmaterial()
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

    camera.position.y = -500;
    camera.position.z = 100;
    camera.rotation.x = 1.2;

    var scene = new THREE.Scene();

    var plane = new THREE.Mesh(new THREE.PlaneGeometry(300,300), new THREE.MeshNormalMaterial());

    var cube = new THREE.Mesh(new THREE.CubeGeometry(200,100,100), new THREE.MeshLambertMaterial({
        color:'blue'
    }));


    var light = new THREE.DirectionalLight('white');
    light.position.set(0,-400,200).normalize();

    var angularSpeed = 0.4;
    var lastTime = 0;

    function animate()
    {
        var time = (new Date()).getTime();
        var timeDiff = time - lastTime;
        var change = angularSpeed * timeDiff * 2 * Math.PI / 1000;
        cube.rotation.y = change;
        renderer.render(scene, camera);

        requestAnimationFrame(function() {
            animate();
        });
    }

    cube.rotation.z = 45 * (Math.PI / 180);

    //scene.add(plane);
    scene.add(cube);
    scene.add(light);

    animate();
}