
rotations();

function rotations()
{
    var camera, scene, renderer, sun, mercury, venus, earth, mars, planets = [], orbitalSpeed = [], distance = [];

    init();

    animate();

    function init()
    {
        scene = new THREE.Scene();

        var fieldOfView = 75;
        var nearClippingPlane = 1;
        var farClippingPlane = 10000;

        var height = 150;

        camera = new THREE.PerspectiveCamera( fieldOfView, window.innerWidth / window.innerHeight, nearClippingPlane, farClippingPlane );
        camera.position.set(20,height,200);
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
        //scene.add(line);

        sun = new THREE.Mesh(new THREE.SphereGeometry(20, 4, 4), new THREE.MeshBasicMaterial({
            color:'yellow'
        }));
        distance['sun'] = 2;

        planets['mercury'] = new THREE.Mesh(new THREE.SphereGeometry(10, 4, 4), new THREE.MeshBasicMaterial({
            color:'grey'
        }));
        distance['mercury'] = 40;

        planets['venus'] = new THREE.Mesh(new THREE.SphereGeometry(10, 4, 4), new THREE.MeshBasicMaterial({
            color:'orange'
        }));
        distance['venus'] = 100;

        planets['earth'] = new THREE.Mesh(new THREE.SphereGeometry(10, 4, 4), new THREE.MeshBasicMaterial({
            color:'lightblue'
        }));
        distance['earth'] = 150;

        planets['mars'] = new THREE.Mesh(new THREE.SphereGeometry(10, 4, 4), new THREE.MeshBasicMaterial({
            color:'red'
        }));
        distance['mars'] = 220;


        scene.add(sun);
        scene.add(planets['mercury']);
        scene.add(planets['venus']);
        scene.add(planets['earth']);
        scene.add(planets['mars']);



        render();
    }

    function animate()
    {
        requestAnimationFrame( animate );
        render();
    }

    function render()
    {
        orbitalSpeed['sun'] = Date.now() * (5/10000);
        orbitalSpeed['mercury'] = Date.now() * (82.872/10000);
        orbitalSpeed['venus'] = Date.now() * (32.764/10000);
        orbitalSpeed['earth'] = Date.now() * (15.432534/10000);
        orbitalSpeed['mars'] = Date.now() * (8.93854/10000);

        sun.position.x = Math.cos( orbitalSpeed['sun'] ) * distance['sun'];
        sun.position.z = Math.sin( orbitalSpeed['sun'] ) * distance['sun'];

        planets['mercury'].position.x = Math.cos( orbitalSpeed['mercury'] ) * distance['mercury'] + sun.position.x;
        planets['mercury'].position.z = Math.sin( orbitalSpeed['mercury'] ) * distance['mercury'] + sun.position.z;

        planets['venus'].position.x = Math.cos( orbitalSpeed['venus'] ) * distance['venus'] + sun.position.x;
        planets['venus'].position.z = Math.sin( orbitalSpeed['venus'] ) * distance['venus'] + sun.position.z;

        planets['earth'].position.x = Math.cos( orbitalSpeed['earth'] ) * distance['earth'] + sun.position.x;
        planets['earth'].position.z = Math.sin( orbitalSpeed['earth'] ) * distance['earth'] + sun.position.z;

        planets['mars'].position.x = Math.cos( orbitalSpeed['mars'] ) * distance['mars'] + sun.position.x;
        planets['mars'].position.z = Math.sin( orbitalSpeed['mars'] ) * distance['mars'] + sun.position.z;

        //camera.position.x = Math.cos( timer ) * distance;
        //camera.position.z = Math.sin( timer ) * distance;

        camera.lookAt( scene.position );

        renderer.render(scene, camera);
    }
}