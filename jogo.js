console.log('Flappy Bird');

const sprites = new Image();
sprites.src = "./sprites.png";

const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');


const planoDeFundo = {
    sourceX: 390,
    sourceY: 0,
    largura: 275,
    altura: 204,
    x: 0,
    y: canvas.height - 204,
    desenha(){

        contexto.fillStyle = '#70c5ce';
        contexto.fillRect(0,0,canvas.width,canvas.height)

        contexto.drawImage(
            sprites,
            planoDeFundo.sourceX,planoDeFundo.sourceY,
            planoDeFundo.largura, planoDeFundo.altura,
            planoDeFundo.x, planoDeFundo.y,
            planoDeFundo.largura, planoDeFundo.altura,
        )


        contexto.drawImage(
            sprites,
            planoDeFundo.sourceX,planoDeFundo.sourceY,
            planoDeFundo.largura, planoDeFundo.altura,
            planoDeFundo.x + planoDeFundo.largura, planoDeFundo.y,
            planoDeFundo.largura, planoDeFundo.altura,
        )
    }
}

const chao = {
    sourceX: 0,
    sourceY: 610,
    largura: 224,
    altura: 112,
    x: 0,
    y: canvas.height - 112,
    desenha(){
        contexto.drawImage(
            sprites,
            chao.sourceX, chao.sourceY,
            chao.largura, chao.altura,
            chao.x, chao.y,
            chao.largura, chao.altura,
        )
        
        contexto.drawImage(
            sprites,
            chao.sourceX, chao.sourceY,
            chao.largura, chao.altura,
            chao.x + chao.largura, chao.y,
            chao.largura, chao.altura,
        )

    }
}

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
    
    
    planoDeFundo.desenha();
    chao.desenha();
    flappyBird.desenha();

    requestAnimationFrame(loop) //função para otimização de desenho dos quadros
}

loop();