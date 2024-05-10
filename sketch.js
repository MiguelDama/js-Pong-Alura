//variáveis da bolinha
let xBOLINHA = 300;
let yBOLINHA = 200;
let diametro = 23;
let raio = diametro / 2 ;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variáveis da raquete
let xRAQUETE = 5;
let yRAQUETE = 150;
let comprimentoRaquete = 10;
let alturaRaquete = 90;

let colidiu = false;

//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//placar do jogo
let meusPontos = 0;
let pontosOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload (){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

  


function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background("black");
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRAQUETE, yRAQUETE);
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  veficacolisaoRaquete(xRAQUETE, yRAQUETE);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentoRaqueteOponente(xRaqueteOponente, yRaqueteOponente);
  veficacolisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPontos();
  
}

function mostraBolinha(){
  circle(xBOLINHA, yBOLINHA, diametro);
}

function movimentaBolinha(){
  xBOLINHA += velocidadeXBolinha;
  yBOLINHA += velocidadeYBolinha;
}

function verificaColisaoBorda(){
  if  (xBOLINHA + raio> width || 
      xBOLINHA - raio< 0){
  velocidadeXBolinha *= -1;  
  }
  if (yBOLINHA + raio> height || 
      yBOLINHA - raio< 0){
    velocidadeYBolinha *= -1;
  } 
}

function mostraRaquete(x,y){
  rect(x, y, comprimentoRaquete, alturaRaquete);

}



function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRAQUETE -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRAQUETE += 10;
  }
}

function verificaColisaoRaquete(){
  if (xBOLINHA - raio < xRAQUETE + comprimentoRaquete && yBOLINHA - raio < yRAQUETE + alturaRaquete && yBOLINHA + raio > yRAQUETE){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function veficacolisaoRaquete(x, y){
  colidiu =
    collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xBOLINHA, yBOLINHA, raio);
  if (colidiu){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function movimentoRaqueteOponente(){
   if (keyIsDown(87)){
    yRAQUETE -= 10;
  }
  if (keyIsDown(83)){
    yRAQUETE += 10;
  }

}


function incluiPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(20);
  fill(color (210,105, 30));
  rect(150, 10, 40, 20);
  fill(255)
  text(meusPontos, 170, 26);
  fill(color (210,105, 30))
  rect(450, 10, 40, 20);
  fill(255)
  text(pontosOponente, 470, 26);
}

function marcaPontos(){
  if (xBOLINHA > 590){
    meusPontos += 1;
    ponto.play();
  }
  if (xBOLINHA < 10){
    pontosOponente += 1;
    ponto.play();
  }
}
  