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
    gravidade: 0.25,
    velocidade: 0,
    atualiza(){
        flappyBird.velocidade = flappyBird.velocidade + flappyBird.gravidade,
        flappyBird.y = flappyBird.y + flappyBird.velocidade;
    },
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

const mensagemGetReady = {
    sourceX: 134,
    sourceY: 0,
    largura: 174,
    altura: 152,
    x: (canvas.width/2)-174/2,
    y: 50,
    desenha(){
        contexto.drawImage(
            sprites, //imagem
            mensagemGetReady.sourceX, mensagemGetReady.sourceY, //origem da imagem
            mensagemGetReady.largura, mensagemGetReady.altura, //tamanho do recorte
            mensagemGetReady.x, mensagemGetReady.y, //origem do desenho no canvas
            mensagemGetReady.largura, mensagemGetReady.altura, //tamanho do desenho no canvas
        );
    }    
}

let telaAtiva = {};

function mudaParaTela(novaTela){
    telaAtiva = novaTela;
}

const Telas = {
    INICIO: {
        desenha(){
            planoDeFundo.desenha();
            chao.desenha();
            flappyBird.desenha();            
            mensagemGetReady.desenha();
        },
        atualiza(){

        },
        click(){
            mudaParaTela(Telas.JOGO)
        }
    },
    JOGO: {
        desenha(){
            planoDeFundo.desenha();
            chao.desenha();
            flappyBird.desenha();
        },
        atualiza(){
            flappyBird.atualiza();
        }
    }
}




function loop(){
    telaAtiva.desenha();
    telaAtiva.atualiza();
    requestAnimationFrame(loop) //função para otimização de desenho dos quadros
}

window.addEventListener('click', function() {
    if (telaAtiva.click()){
        telaAtiva.click;
    }
} )

mudaParaTela(Telas.INICIO)
loop();