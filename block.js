class block{
    constructor(x, y, w, h){
        this.body = Bodies.rectangle(x, y, w, h, {isStatic:false, restitution: 0.4, friction: 0.6, density: 1.5});
         this.w = w;
         this.h = h;
         World . add(world, this.body);
    }
    display(){
        push ();
        translate(this.body.position.x, this.body.position.y)
       rotate (this.body.angle);
       fill ("purple");
       rectMode(CENTER);
        rect(0, 0, this.w, this.h);
        pop ();
    }
}