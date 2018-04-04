// import hoge from './hoge';
import '../scss/style.scss';
import pixi from './pixi.min';

console.log('app.js');

// コンソールで動いてるか確認するためのコード
// let type = "WebGL"
// if(!PIXI.utils.isWebGLSupported()){
//   type = "canvas"
// }
// PIXI.utils.sayHello(type)

// Pixi Applicationを作成
let app = new PIXI.Application({
    width: 500,
    height: 500,
    antialias: true,    // default: false
    transparent: false, // default: false
    resolution: 1       // default: 1
});

// 背景色の設定
// app.renderer.backgroundColor = 0xcccccc;

// canvasをリサイズ
// app.renderer.autoResize = true;
// app.renderer.resize(500, 500);

// 画面全体にcanvasをリサイズ
// app.renderer.view.style.position = "absolute";
// app.renderer.view.style.display = "block";
// app.renderer.autoResize = true;
// app.renderer.resize(window.innerWidth, window.innerHeight);

// bodyにcanvasを追加
document.body.appendChild(app.view);

// ---------------------------------------------------------------------------

// spriteの作成
// let texture = PIXI.utils.TextureCache["../img/house.png"];
// let sprite = new PIXI.Sprite(texture);

const IMG_PATH = 'img/tileset.png';

// ローダーを使用して画像を読み込み -> setupという関数を呼び出す例
PIXI.loader
    .add([
        IMG_PATH
    ])
    .load(setup);

function setup() {

    // house1のspriteを作成
    // let house1 = new PIXI.Sprite(PIXI.loader.resources[IMG_PATH].texture);
    let texture = PIXI.utils.TextureCache[IMG_PATH];
    // let rectangle = new PIXI.Rectangle(x, y, width, height);
    let rectangle = new PIXI.Rectangle(96, 64, 32, 32);
    texture.frame = rectangle;
    let rocket = new PIXI.Sprite(texture);
    rocket.x = 200;
    rocket.y = 200;

    // stageにspriteを追加
    app.stage.addChild(rocket);

    renderer.render(stage);

    // spriteをstageから消す方法（２パターン）
    // app.stage.removeChild(house1)
    // house1.visible = false;

}





