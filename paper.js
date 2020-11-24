class PAPER{
constructor(x,y,r){
var options={
    isStatic:false,
    density:1.2,
    restitution:0.1,
    friction:1.0
}
this.x = x;
this.y = y;
this.r = r;
this.body = Matter.Bodies.circle(this.x,this.y,this.r,options);
this.image = loadImage("paper.png");

World.add(world,this.body);

}

display(){
    var pa = this.body.position

    push();
    translate(pa.x,pa.y);
    imageMode(RADIUS);
    image(this.image,0,0,this.r,this.r);
    pop();

}

}
