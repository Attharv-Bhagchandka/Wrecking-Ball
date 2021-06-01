class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 25
        }
        this.pointB = pointB
        this.wreck = Constraint.create(options);
        World.add(world, this.wreck);
    }
    display(){
        if(this.wreck.bodyA){
            var pointA = this.wreck.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
            strokeWeight(7);
            line(pointA.x, pointA.y, pointB.x, pointB.y)
            pop();
            }    
        }
}