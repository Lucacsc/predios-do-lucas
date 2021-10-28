class Edificio{
  constructor()
  {
    this.altura=10;
    this.posicao=1;    
    this.yPosicao=390;
    this.largura=25;
    this.andares=10;
    
    //Cada andar é aproximadamente igual a 12 pés
    //Se um edifício tiver 3 andares, ele terá 3 * 12 = 36 pés de altura.
    this.edificio_altura=this.andares*12;
    
  }  
  display()
  {
   this.altura=this.andares*8;
   this.yposicao=395-(this.altura);
    //this.xPosition=395-(this.height);
   this.xposicao=this.posicao*40;
   rect(this.xposicao,this.yposicao, this.largura, this.altura); 
  }  
  
}
