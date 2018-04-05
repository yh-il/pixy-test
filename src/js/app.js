import pixi from './pixi.min';

var renderer = PIXI.autoDetectRenderer(800, 600, { antialias: true });
document.body.appendChild(renderer.view);

// create the root of the scene graph
var stage = new PIXI.Container();

stage.interactive = true;

var bg = PIXI.Sprite.fromImage('img/background.jpg');
bg.position.x = 0;
bg.position.y = 0;
stage.addChild(bg);

var container = new PIXI.Container();
container.position.x = renderer.width / 2;
container.position.y = renderer.height / 2;

var popko = PIXI.Sprite.fromImage('img/popko.png');
popko.anchor.x = 0.5;
popko.anchor.y = 0.5;
container.addChild(popko);

var pipimi = PIXI.Sprite.fromImage('img/pipimi.gif');
pipimi.anchor.x = 0.5;
pipimi.anchor.y = 0.5;
container.addChild(pipimi);

stage.addChild(container);

// let's create a moving shape
var thing = new PIXI.Graphics();
stage.addChild(thing);
thing.position.x = renderer.width / 2;
thing.position.y = renderer.height / 2;
thing.lineStyle(0);
container.mask = thing;

var count = 0;

stage.on('click', onClick);
stage.on('tap', onClick);

function onClick() {
    if(!container.mask) {
        container.mask = thing;
    } else {
        container.mask = null;
    }
}

var help = new PIXI.Text('Click to turn masking on / off.', { font:'bold 12pt Arial', fill: 'black' });
help.position.y = renderer.height - 26;
help.position.x = 10;
stage.addChild(help);

animate();

function animate() {

    // bg.rotation += 0.01;

    popko.rotation -= 0.01;

    pipimi.rotation += 0.01;
    pipimi.scale.x = 1 + Math.sin(count) * 0.04;
    pipimi.scale.y = 1 + Math.cos(count) * 0.04;

    count += 0.1;

    thing.clear();

    thing.beginFill(0xddffdd, 0.5);
    thing.moveTo(-120 + Math.sin(count) * 20, -100 + Math.cos(count)* 20);
    thing.lineTo(-320 + Math.cos(count)* 20, 100 + Math.sin(count)* 20);
    thing.lineTo(120 + Math.cos(count) * 20, -100 + Math.sin(count)* 20);
    thing.lineTo(120 + Math.sin(count) * 20, 100 + Math.cos(count)* 20);
    thing.lineTo(-120 + Math.cos(count)* 20, 100 + Math.sin(count)* 20);
    thing.lineTo(-120 + Math.sin(count) * 20, -300 + Math.cos(count)* 20);
    thing.lineTo(-320 + Math.sin(count) * 20, -100 + Math.cos(count)* 20);
    thing.rotation = count * 0.1;


    renderer.render(stage);
    requestAnimationFrame(animate);
}
