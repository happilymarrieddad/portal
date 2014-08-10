phong();

function phong()
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

    camera.position.y = -400;
    camera.position.z = 100;
    camera.rotation.x = 1.2;

    var scene = new THREE.Scene();

    var plane = new THREE.Mesh(new THREE.PlaneGeometry(300,300), new THREE.MeshNormalMaterial());

    var cyl = new THREE.Mesh(new THREE.SphereGeometry(100, 8, 8), new THREE.MeshPhongMaterial({
        color:'blue',
        specular: 'silver',
        shininess:'15',
        shading: THREE.FlatShading //THREE.SmoothShading
    }));


    var light = new THREE.DirectionalLight('white');
    light.position.set(0,-400,200).normalize();

    var angularSpeed = 0.4;
    var lastTime = 0;


    // Build controls
    controls = new THREE.TrackballControls(camera);
    controls.addEventListener('change', render);

    function animate()
    {
        var time = (new Date()).getTime();
        var timeDiff = time - lastTime;
        var change = angularSpeed * timeDiff * 2 * Math.PI / 1000;
        cyl.rotation.y = change;
        render();
        controls.update();

        requestAnimationFrame(function() {
            animate();
        });
    }
    function render()
    {
        renderer.render(scene, camera);
    }

    cyl.rotation.z = 45 * (Math.PI / 180);

    //scene.add(plane);
    scene.add(cyl);
    scene.add(light);

    animate();
}