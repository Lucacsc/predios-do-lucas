//360 familias,cada andar so pode 2 familias, so pode criar 10 edficios, 168
var b1, b2, b3, b4, b5, b6, b7, b8, b9, b10;

function setup() {
  //Area
  createCanvas(400, 400);
  b1=new Edificio();
  b1.posicao=0;
  b1.andares=23;
  
  b2=new Edificio();
  b2.posicao=1;
  b2.andares=24;

 b3=new Edificio();
 b3.posicao=2;
 b3.andares=13;
  
 b4=new Edificio();
 b4.posicao=4;
 b4.andares=15;
  
 b5=new Edificio();
 b5.posicao=5;
 b5.andares=20;
  
 b6=new Edificio();
 b6.posicao=6;
 b6.andares=18;
  
 b7=new Edificio();
 b7.posicao=7;
 b7.andares=17;
  
 b8=new Edificio();
 b8.posicao=8;
 b8.andares=23;
  
 b9=new Edificio();
 b9.posicao=9;
 b9.andares=15;
  
 b10=new Edificio();
 b10.posicao=3;
 b10.andares=17;
}

function draw() {
  background(0);
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  
}