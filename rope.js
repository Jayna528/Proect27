class rope{
    constructor(body1,body2, offsetX){
        this.offsetX = offsetX

        var options = {
            bodyA: body1,
            bodyB: body2,

            stiffness: 1,
            
        }
            this.rope= Constraint.create(options),
            World.add(world,this.rope)}
   
   
        display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        var positionC = pointB.x + this.offsetX;
        line(pointA.x,pointA.y,positionC,pointB.y);


    }
        
    
}