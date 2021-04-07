class RopeEasy{
    constructor(bodyA,bodyB){
        var options = {
            bodyA : bodyA,
            bodyB : bodyB
        }
        this.ropeeasy = Constraint.create(options);
        World.add(world, this.ropeeasy);
    }
    display(){
        var pointA = this.ropeeasy.bodyA.position;
        var pointB = this.ropeeasy.pointB;

        stroke("green");
        strokeWeight(3);

        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}