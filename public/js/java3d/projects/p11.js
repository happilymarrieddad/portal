click();
if ( ! Detector.webgl ) {

    Detector.addGetWebGLMessage();
    document.getElementById( 'container' ).innerHTML = "";

}
var scene, camera, renderer, mesh, mesh2;

function click()
{

    scene = new THREE.Scene();

    var fieldOfView = 45;
    var nearClippingPlane = 1;
    var farClippingPlane = 10000;

    camera = new THREE.PerspectiveCamera( fieldOfView, window.innerWidth / window.innerHeight, nearClippingPlane, farClippingPlane );
    camera.position.set(-400,800,70);

    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor( 0xbfd1e5 );

    renderer.setSize( $('#jsbox').width(), $('#jsbox').height() );
    var container = document.getElementById('jsbox');
    container.appendChild(renderer.domElement);


    var worldWidth = 500;
    var worldDepth = 500, worldHalfWidth = worldWidth / 2, worldHalfDepth = worldDepth / 2;
    var geometry = new THREE.PlaneGeometry( 30000, 30000, worldWidth - 1, worldDepth - 1 );
    geometry.applyMatrix( new THREE.Matrix4().makeRotationX( - Math.PI / 2 ) );
    var data = generateHeight( worldWidth, worldDepth );
    for (var i = 0, l = geometry.vertices.length; i < l; i++)
    {
        geometry.vertices[i].y = data[i] * 10;
    }

    var texture = new THREE.Texture( generateTexture( data, worldWidth, worldDepth ), new THREE.UVMapping(), THREE.ClampToEdgeWrapping, THREE.ClampToEdgeWrapping );
    texture.needsUpdate = true;

    mesh = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { map: texture } ) );
    scene.add( mesh );

    geometry = THREE.CubeGeometry(0.001,0.001,0.001);
    var material = new THREE.MeshNormalMaterial();
    mesh2 = new THREE.Mesh(geometry, material);
    mesh2.position.set(-400,800,80);
    scene.add(mesh2);
    camera.lookAt( mesh2.position );

    window.addEventListener('resize', onWindowResize, false);

    /*  Event Listeners  */
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
            camera.rotation.y -= 0.1;
            break;
        case 'D':
        case 'd':
            camera.rotation.y += 0.1;
            break;
        case 'S':
        case 's':
            camera.rotation.x += 0.1;
            break;
        case 'W':
        case 'w':
            camera.rotation.x -= 0.1;
            break;
        case 'Q':
        case 'q':
            camera.rotation.z -= 0.1;
            break;
        case 'E':
        case 'e':
            camera.rotation.z += 0.1;
            break;
    }

    animate();
}

function generateHeight( width, height ) {

    var size = width * height, data = new Uint8Array( size ),
        perlin = new ImprovedNoise(), quality = 1, z = Math.random() * 100;

    for ( var j = 0; j < 4; j ++ ) {

        for ( var i = 0; i < size; i ++ ) {

            var x = i % width, y = ~~ ( i / width );
            data[ i ] += Math.abs( perlin.noise( x / quality, y / quality, z ) * quality * 1.75 );

        }

        quality *= 5;

    }

    return data;

}

function generateTexture( data, width, height ) {

    var canvas, canvasScaled, context, image, imageData,
        level, diff, vector3, sun, shade;

    vector3 = new THREE.Vector3( 0, 0, 0 );

    sun = new THREE.Vector3( 1, 1, 1 );
    sun.normalize();

    canvas = document.createElement( 'canvas' );
    canvas.width = width;
    canvas.height = height;

    context = canvas.getContext( '2d' );
    context.fillStyle = '#000';
    context.fillRect( 0, 0, width, height );

    image = context.getImageData( 0, 0, canvas.width, canvas.height );
    imageData = image.data;

    for ( var i = 0, j = 0, l = imageData.length; i < l; i += 4, j ++ ) {

        vector3.x = data[ j - 2 ] - data[ j + 2 ];
        vector3.y = 2;
        vector3.z = data[ j - width * 2 ] - data[ j + width * 2 ];
        vector3.normalize();

        shade = vector3.dot( sun );

        imageData[ i ] = ( 96 + shade * 128 ) * ( 0.5 + data[ j ] * 0.007 );
        imageData[ i + 1 ] = ( 32 + shade * 96 ) * ( 0.5 + data[ j ] * 0.007 );
        imageData[ i + 2 ] = ( shade * 96 ) * ( 0.5 + data[ j ] * 0.007 );
    }

    context.putImageData( image, 0, 0 );

    // Scaled 4x

    canvasScaled = document.createElement( 'canvas' );
    canvasScaled.width = width * 4;
    canvasScaled.height = height * 4;

    context = canvasScaled.getContext( '2d' );
    context.scale( 4, 4 );
    context.drawImage( canvas, 0, 0 );

    image = context.getImageData( 0, 0, canvasScaled.width, canvasScaled.height );
    imageData = image.data;

    for ( var i = 0, l = imageData.length; i < l; i += 4 ) {

        var v = ~~ ( Math.random() * 5 );

        imageData[ i ] += v;
        imageData[ i + 1 ] += v;
        imageData[ i + 2 ] += v;

    }

    context.putImageData( image, 0, 0 );

    return canvasScaled;

}

function animate()
{
    $('#x').text(camera.rotation.x);
    $('#y').text(camera.rotation.y);
    $('#z').text(camera.rotation.z);
    render();
}

function render()
{
    renderer.render(scene, camera);
}