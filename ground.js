class GROUND{
    constructor(){
        var ground_options={
            isStatic:true
          }
        
          this.body = Bodies.rectangle(600,680,1200,20,ground_options);
          this.width = 1200;
          this.height = 20;
        
          World.add(world,this.body);
    }

    display(){
        push();
        fill("brown");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
    }
}