var red = new THREE.TextureLoader().load( 'textures/red.jpg' );
var blue = new THREE.TextureLoader().load( 'textures/blue.jpg' );
var yellow = new THREE.TextureLoader().load( 'textures/yellow.jpg' );
var orange = new THREE.TextureLoader().load( 'textures/orange.jpg' );
var white = new THREE.TextureLoader().load( 'textures/white.jpg' );
var green = new THREE.TextureLoader().load( 'textures/green.jpg' );
var allMaterialsArray = [
    [
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { map: orange } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { map: yellow } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { map: blue } )
    ],
    [
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { map: yellow } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { map: blue } )
    ],
    [
     new THREE.MeshBasicMaterial( { map: red } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { map: yellow } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { map: blue } )
    ],
    [
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { map: orange } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { map: yellow } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } )
    ],
    [
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { map: yellow } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } )
    ],
    [
     new THREE.MeshBasicMaterial( { map: red } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { map: yellow } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } )
    ],
    [
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { map: orange } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { map: yellow } ),
     new THREE.MeshBasicMaterial( { map: green } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } )
    ],
    [
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { map: yellow } ),
     new THREE.MeshBasicMaterial( { map: green } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } )
    ],
    [
     new THREE.MeshBasicMaterial( { map: red } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { map: yellow } ),
     new THREE.MeshBasicMaterial( { map: green } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } )
    ],
    [
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { map: orange } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { map: blue } )
    ],
    [
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { map: blue } )
    ],
    [
     new THREE.MeshBasicMaterial( { map: red } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { map: blue } )
    ],
    [
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { map: orange } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } )
    ],
    [
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } )
    ],
    [
     new THREE.MeshBasicMaterial( { map: red } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } )
    ],
    [
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { map: orange } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { map: green } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } )
    ],
    [
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { map: green } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } )
    ],
    [
     new THREE.MeshBasicMaterial( { map: red } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { map: green } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } )
    ],
    [
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { map: orange } ),
     new THREE.MeshBasicMaterial( { map: white } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { map: blue } )
    ],
    [
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { map: white } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { map: blue } )
    ],
    [
     new THREE.MeshBasicMaterial( { map: red } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { map: white } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { map: blue } )
    ],
    [
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { map: orange } ),
     new THREE.MeshBasicMaterial( { map: white } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } )
    ],
    [
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { map: white } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } )
    ],
    [
     new THREE.MeshBasicMaterial( { map: red } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { map: white } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } )
    ],
    [
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { map: orange } ),
     new THREE.MeshBasicMaterial( { map: white } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { map: green } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } )
    ],
    [
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { map: white } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { map: green } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } )
    ],
    [
     new THREE.MeshBasicMaterial( { map: red } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { map: white } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } ),
     new THREE.MeshBasicMaterial( { map: green } ),
     new THREE.MeshBasicMaterial( { color: 0x000000 } )
    ],
];