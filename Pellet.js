class Pellet{
  constructor(x, y, width, height){
    var options ={
      'restitution':0.8,
      'friction':1.0,
      'density':1.0
    }
    this.body = Bodies.rect(x,y,width,height);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y)
    rotate(angle)
    strokeWeight(3);
    stroke("darkOrange");
    fill("olive");
    rectMode(CENTER);
    rect(0, 0, this.width, this.height)
    pop();
  }
};
