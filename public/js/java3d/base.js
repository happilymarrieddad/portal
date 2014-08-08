//onload0();
//onload1();
//time2();
//material3();
//lambertmaterial4();
//shapes5();
//phong6();  //include trackball controls
objectLoops7();

function objectLoops7()
{
    var renderer = new THREE.WebGLRenderer();

    var renWidth = 800;
    var renHeight = 500;

    renderer.setSize( renWidth, renHeight );
    var container = document.getElementById('jsbox2');
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
    sphere.position.x = 150;

    for(var i = 0; i < 10; i++)
    {
        var geometry = new THREE.CubeGeometry(100,100,100);
        var material = new THREE.MeshNormalMaterial();
        var mesh = new THREE.Mesh(geometry, material);
        mesh.position.z = (i * 120) - 500;
        scene.add(mesh);
    }


    var light = new THREE.DirectionalLight('white');
    light.position.set(0,-400,200).normalize();
    var light2 = new THREE.DirectionalLight('white');
    light2.position.set(0,400,200).normalize();

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
        sphere.rotation.y = change;
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

    sphere.rotation.z = 45 * (Math.PI / 180);

    //scene.add(plane);
    scene.add(sphere);
    scene.add(light);
    scene.add(light2);
    scene.add(mesh);

    animate();
}


function phong6()
{
    var renderer = new THREE.WebGLRenderer();

    var renWidth = 800;
    var renHeight = 500;

    renderer.setSize( renWidth, renHeight );
    var container = document.getElementById('jsbox2');
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

function shapes5()
{
    var renderer = new THREE.WebGLRenderer();

    var renWidth = 800;
    var renHeight = 500;

    renderer.setSize( renWidth, renHeight );
    var container = document.getElementById('jsbox2');
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

    var sphere = new THREE.Mesh(new THREE.SphereGeometry(100, 8, 8), new THREE.MeshBasicMaterial({
        color:'blue'
    }));


    //var light = new THREE.DirectionalLight('white');
    //light.position.set(0,-400,200).normalize();

    var angularSpeed = 0.4;
    var lastTime = 0;

    function animate()
    {
        var time = (new Date()).getTime();
        var timeDiff = time - lastTime;
        var change = angularSpeed * timeDiff * 2 * Math.PI / 1000;
        sphere.rotation.y = change;
        renderer.render(scene, camera);

        requestAnimationFrame(function() {
            animate();
        });
    }

    sphere.rotation.z = 45 * (Math.PI / 180);

    //scene.add(plane);
    scene.add(sphere);
    //scene.add(light);

    animate();
}


function lambertmaterial4()
{
    var renderer = new THREE.WebGLRenderer();

    var renWidth = 800;
    var renHeight = 500;

    renderer.setSize( renWidth, renHeight );
    var container = document.getElementById('jsbox2');
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

function material3()
{
    var renderer = new THREE.WebGLRenderer();

    var renWidth = 800;
    var renHeight = 500;

    renderer.setSize( renWidth, renHeight );
    var container = document.getElementById('jsbox2');
    container.appendChild(renderer.domElement);

    var fieldOfView = 75;
    var nearClippingPlane = 1;
    var farClippingPlane = 1000;

    var camera = new THREE.PerspectiveCamera( fieldOfView, window.innerWidth / window.innerHeight, nearClippingPlane, farClippingPlane );

    camera.position.y = -250;
    camera.position.z = 100;
    camera.rotation.x = .90;

    var scene = new THREE.Scene();

    var plane = new THREE.Mesh(new THREE.PlaneGeometry(300,300), new THREE.MeshNormalMaterial());

    var cube = new THREE.Mesh(new THREE.CubeGeometry(100,100,100), new THREE.MeshBasicMaterial({
        color:'lightblue',
        wireframe:'true',
        wireframeLinewidth:'20'
    }));

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

    animate();
}

function time2()
{
    var renderer = new THREE.WebGLRenderer();

    var renWidth = 800;
    var renHeight = 500;

    renderer.setSize( renWidth, renHeight );
    var container = document.getElementById('jsbox2');
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


function onload1()
{
    /* Setup */
    var scene = new THREE.Scene();

    var fieldOfView = 75;
    var nearClippingPlane = 0.1;
    var farClippingPlane = 100000;

    var windowWMax = window.innerWidth/150;
    var windowHMax = window.innerHeight/150;

    var camera = new THREE.PerspectiveCamera( fieldOfView, window.innerWidth / window.innerHeight, nearClippingPlane, farClippingPlane );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( 800, 500 );
    var container = document.getElementById('jsbox1');
    container.appendChild(renderer.domElement);

    /* Colors */
    var green = 0x00ff00;
    var blue = 0x0000ff;
    var red = 0xff0000;


    /* Building Objects */
    var geometry = new THREE.BoxGeometry(1,1,1);
    var material = new THREE.MeshBasicMaterial( { color: green } );
    var cube = new THREE.Mesh( geometry, material );

    /* Sky
     var image = '/images/space-background.jpg';
     var skyBoxGeometry = new THREE.CubeGeometry(10000,10000,10000);
     var materialArray = [];
     for(var i = 0; i < 6; i++)
     {
     materialArray.push( new THREE.MeshBasicMaterial({
     map: THREE.ImageUtils.loadTexture(image),
     side: THREE.BackSide
     }))
     }
     var skyBoxMaterial = new THREE.MeshBasicMaterial(materialArray);
     var skyBox = new THREE.Mesh(skyBoxGeometry, skyBoxMaterial);*/


    /* Add objects to scene */
    scene.add( cube );
//scene.add( skyBox );

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


        /*
         camera.position.z += 0.1;
         if(camera.position.z > 20)
         {
         camera.position.z = -20;
         }*/
    }


    /* Render scene */
    render();
}

function onload0()
{

}