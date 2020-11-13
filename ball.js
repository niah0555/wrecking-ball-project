class ball{
    constructor(x, y, radius){
        this.body = Bodies.circle(x, y, radius, {isStatic:false, frictionAir: 0.4, density: 1.5});
         this.radius=radius;
       
         World . add(world, this.body);
    }
    display(){

       fill ("black");
       ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.radius);
       
    }
}