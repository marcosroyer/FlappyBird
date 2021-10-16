console.log('Flappy Bird');

const sprites = new Image();
sprites.src = "./sprites.png";

const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');

const flappyBird = {
    sourceX: 0,
    sourceY: 0,
    largura: 33,
    altura: 24,
    x: 10,
    y: 50,
    desenha(){
        contexto.drawImage(
            sprites, //imagem
            flappyBird.sourceX, flappyBird.sourceY, //origem da imagem
            flappyBird.largura, flappyBird.altura, //tamanho do recorte
            flappyBird.x, flappyBird.y, //origem do desenho no canvas
            flappyBird.largura, flappyBird.altura, //tamanho do desenho no canvas
        );
    }
}


function loop(){

    flappyBird.desenha();

    requestAnimationFrame(loop) //função para otimização de desenho dos quadros
}

loop();