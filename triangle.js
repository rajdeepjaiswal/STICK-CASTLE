class Triangle{
    constructor(x,y,sides,radius){
        var options = {
           
            isStatic: true,
            angle: PI/4
        }
        this.body = Bodies.polygon(x, y, sides, radius, options);
      
       
        World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      var vertices= this.body.vertices;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill(150,12,12);
      triangle(vertices[0].x,vertices[0].y,vertices[1].x,vertices[1].y,vertices[2].x,vertices[2].y);
      pop(); 
    }
    
}