click();

var scene, camera, renderer, cube, light, light2, light3;

function click()
{

    scene = new THREE.Scene();

    var fieldOfView = 45;
    var nearClippingPlane = 1;
    var farClippingPlane = 10000;

    camera = new THREE.PerspectiveCamera( fieldOfView, window.innerWidth / window.innerHeight, nearClippingPlane, farClippingPlane );
    camera.position.set(-400,400,70);
    camera.lookAt(scene.position);

    renderer = new THREE.WebGLRenderer();

    renderer.setSize( $('#jsbox').width(), $('#jsbox').height() );
    var container = document.getElementById('jsbox');
    container.appendChild(renderer.domElement);

    cube = new THREE.Mesh(new THREE.CubeGeometry(200,100,100), new THREE.MeshLambertMaterial({
        color:'lightblue'
    }));

    light = new THREE.DirectionalLight('white',1);
    light.position.set(200,200,800).normalize();
    light2 = new THREE.DirectionalLight('white',1);
    light2.position.set(-200,-800,-200).normalize();
    light3 = new THREE.DirectionalLight('white',0.1);
    light3.position.set(-400,400,100).normalize();
    scene.add(light);
    scene.add(light2);
    scene.add(light3);
    scene.add(cube);

    window.addEventListener('resize', onWindowResize, false);
    document.addEventListener('keypress', function(event){
        var char = String.fromCharCode(event.charCode ? event.charCode : event.keyCode);
        $('#letter').html(char);
        onDocumentKeyPressed(char);
    }, false);

    render();
}

function onWindowResize()
{
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( $('#jsbox').width(), $('#jsbox').height() );
}

function onDocumentKeyPressed(char)
{
    switch(char)
    {
        case 'A':
        case 'a':
            cube.rotation.y -= 2 * (Math.PI / 180);
            break;
        case 'D':
        case 'd':
            cube.rotation.y += 2 * (Math.PI / 180);
            break;
        case 'S':
        case 's':
            cube.rotation.z += 2 * (Math.PI / 180);
            break;
        case 'W':
        case 'w':
            cube.rotation.z -= 2 * (Math.PI / 180);
            break;
        case 'Q':
        case 'q':
            cube.rotation.x -= 2 * (Math.PI / 180);
            break;
        case 'E':
        case 'e':
            cube.rotation.x += 2 * (Math.PI / 180);
            break;
        case '_':
        case '-':
            camera.position.y = camera.position.y - 10;
            break;
        case '+':
        case '=':
            camera.position.y = camera.position.y + 10;
            break;
        case 'L':
        case 'l':
            camera.position.z = camera.position.z + 10;
            break;
        case 'J':
        case 'j':
            camera.position.z = camera.position.z - 10;
            break;
        case 'K':
        case 'k':
            camera.position.x = camera.position.x - 10;
            break;
        case 'I':
        case 'i':
            camera.position.x = camera.position.x + 10;
            break;
        case 'U':
        case 'u':
            camera.rotation.z += 2 * (Math.PI / 180);
            break;
        case 'O':
        case 'o':
            camera.rotation.z -= 2 * (Math.PI / 180);
            break;
        case 'F':
        case 'f':
            camera.lookAt( cube.position );
            break;

    }

    animate();
}

function animate()
{
    $('#cube-x').html(cube.rotation.x);
    $('#cube-y').html(cube.rotation.y);
    $('#cube-z').html(cube.rotation.z);
    $('#camera-x').html(camera.position.x);
    $('#camera-y').html(camera.position.y);
    $('#camera-z').html(camera.position.z);
    render();
}

function render()
{
    renderer.render(scene, camera);
}
