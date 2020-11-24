class DUST  {
    constructor(){
    
    var options={
        isStatic:true
    
    }
    
    this.body = Bodies.rectangle(1050,620,50,50,options);
    this.width = 50;
    this.height = 50;
    //this.image = loadImage("dustbingreen.png");
    
    World.add(world,this.body);
    }
    
    display(){
    push();
    rectMode(CENTER);
    rect(this.body.position.x,this.body.position.y,this.width,this.height);
    pop();
    
    }

    }