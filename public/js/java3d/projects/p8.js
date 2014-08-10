grid();

function grid()
{
    var camera, scene, renderer;

    init();

    function init()
    {
        scene = new THREE.Scene();

        var fieldOfView = 75;
        var nearClippingPlane = 1;
        var farClippingPlane = 10000;

        camera = new THREE.PerspectiveCamera( fieldOfView, window.innerWidth / window.innerHeight, nearClippingPlane, farClippingPlane );
        camera.position.set(0,400,200);
        camera.lookAt(scene.position);

        renderer = new THREE.WebGLRenderer();

        var renWidth = 800;
        var renHeight = 500;

        renderer.setSize( renWidth, renHeight );
        var container = document.getElementById('jsbox');
        container.appendChild(renderer.domElement);

        var size = 400, step = 4;

        var geometry = new THREE.Geometry();
        var material = new THREE.LineBasicMaterial({color:'blue'});

        for(var i = -size; i<=size ;i+=step)
        {
            geometry.vertices.push(new THREE.Vector3( -size, -0.04, i ));
            geometry.vertices.push(new THREE.Vector3( size, -0.04, i ));


            geometry.vertices.push(new THREE.Vector3( i, -0.04, -size ));
            geometry.vertices.push(new THREE.Vector3( i, -0.04, size ));
        }

        var line = new THREE.Line(geometry, material, THREE.LinePieces);
        scene.add(line);


        render();
    }
    function render()
    {
        renderer.render(scene, camera);
    }

}