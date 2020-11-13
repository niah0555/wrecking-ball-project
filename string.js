class string{
    constructor(a, b){
        this.string = Matter.Constraint.create({bodyA: a, pointB: b, lenght: 20, stiffness: 0.1});
        World.add (world, this.string);
    }
    display(){
        stroke ("green");
        strokeWeight(5);
        line (this.string.bodyA. position.x, this. string. bodyA. position. y, this.string. pointB.x, this.string.pointB.y);
    }
}