var game = new Phaser.Game(580, 300, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() {

    var progress = game.add.graphics(0,0);
    game.load.onFileComplete.add(function(prg){
        progress.beginFill(0xFF3300);
        progress.drawRect(0,0, prg*4.8,100);
        progress.endFill();
    });

    
    game.load.image("escenario", "imagenes/escenario.png");
    game.load.spritesheet("personaje","imagenes/hojapersonaje.png",108,240,3,0,0);
    // ID de spritesheet, archivo, ancho de cada imagen, alto de cada imagen, número de imágenes, espacio en píxeles que hay que dejar de margen al empezar el archivo (margin), espacio en píxeles de separación entre imágenes (spacing)
}


var personaje;
var escenario;


function create() {

   escenario = game.add.sprite(0,0,"escenario");
   personaje = game.add.sprite(400,50,"personaje");

   personaje.animations.add("movimiento",[0,1,2],4,true);
   //id de animacion, [numero de frames-1], cuadros por segundo, bucle verdadero o falso

   

}

function update() {
    personaje.animations.play("movimiento");

  

}

function render() {

    

}