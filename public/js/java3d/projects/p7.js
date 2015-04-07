random();

function random()
{
    var renderer = new THREE.WebGLRenderer({alpha:true});
    renderer.setClearColor(0xffffff, 1);

    var renWidth = 800;
    var renHeight = 500;

    renderer.setSize( renWidth, renHeight );
    var container = document.getElementById('jsbox');
    container.appendChild(renderer.domElement);

    var fieldOfView = 75;
    var nearClippingPlane = 1;
    var farClippingPlane = 10000;

    var camera = new THREE.PerspectiveCamera( fieldOfView, window.innerWidth / window.innerHeight, nearClippingPlane, farClippingPlane );

    camera.position.y = -400;
    camera.position.z = 100;
    camera.rotation.x = 1.2;

    var scene = new THREE.Scene();

    var plane = new THREE.Mesh(new THREE.PlaneGeometry(300,300), new THREE.MeshNormalMaterial());

    // Objects
    var sphere = new THREE.Mesh(new THREE.SphereGeometry(20, 8, 8), new THREE.MeshPhongMaterial({
        color:'blue',
        specular: 'silver',
        shininess:'15',
        shading: THREE.FlatShading //THREE.SmoothShading
    }));

    for(var i = 0; i < 1000; i++)
    {
        var geometry = new THREE.CubeGeometry(100,100,100);
        var material = new THREE.MeshNormalMaterial();
        var mesh = new THREE.Mesh(geometry, material);
        mesh.position.z = (Math.random() - 0.5) * 10000;
        mesh.position.x = (Math.random() - 0.5) * 10000;
        mesh.position.y = (Math.random() - 0.5) * 10000;
        mesh.rotation.z = (Math.random() - 0.5) * 360;
        mesh.rotation.x = (Math.random() - 0.5) * 360;
        mesh.rotation.y = (Math.random() - 0.5) * 360;
        scene.add(mesh);
    }


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
        sphere.rotation.y = angularSpeed * timeDiff * 2 * Math.PI / 1000;
        controls.update();

        requestAnimationFrame(function() {
            animate();
        });
        render();
    }
    function render()
    {
        renderer.render(scene, camera);
    }

    sphere.rotation.z = degree(45);

    //scene.add(plane);
    scene.add(sphere);
    scene.add(light);
    scene.add(mesh);

    animate();
}

function degree(num)
{
    return (num * (Math.PI/180));
}