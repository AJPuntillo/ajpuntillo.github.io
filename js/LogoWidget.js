function LogoWidget() {
    var self = this;
    var scene, renderer, camera, controls, container;
    var screenWidth, screenHeight;
    var loader1, obj, ambientLight;

    this.Init = function(width, height, appendID) {
    	screenWidth = width;
    	screenHeight = height;
    	container = document.getElementById(appendID);

        //Scene
        scene = new THREE.Scene();
        scene.background = new THREE.Color( 0xdbdbdb );

        //Camera
        camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
        camera.position.set(0, 0, 15);
        camera.lookAt(scene.position);

        //Renderer
        renderer = new THREE.WebGLRenderer({antialias: true});
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize(width, height);
        container.appendChild(renderer.domElement);

        //Light
        ambientLight = new THREE.AmbientLight(0xffffff, 2.0);
        scene.add(ambientLight);

        //AssimpJSON Loader
        loader1 = new THREE.AssimpJSONLoader();
            loader1.load( 'models/Logo.json', function ( object ) {
                object.scale.multiplyScalar( 0.1 );
                obj = object;
                scene.add( obj );
            } );

        //Orbit Controls
        controls = new THREE.OrbitControls( camera, renderer.domElement );
	};

	this.Render = function() {   
        controls.update();
        renderer.render(scene, camera);
	};
}