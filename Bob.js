class Bob {
    constructor(x, y,radius) {
      var options = {
         // isStatic:true,
          'restitution':0.8,
          'friction':1,
          'density':1.2
        
      }
      this.body = Bodies.circle(x, y,radius, options);
      this.radius = radius;
      World.add(world, this.body);
    }
    /*display(){
      console.log("in display")
      push();
      var pos =this.body.position;
      translate(pos.x, pos.y);
      fill("black");
      pop();
    }*/
    display(){
       push();
        var pos =this.body.position;
         translate(this.body.position.x, this.body.position.y);
          fill("purple");
           ellipseMode(RADIUS);
            ellipse(0,0,20,20);
           //imageMode(CENTER); // image(this.image,0,0,40,40) 
           pop(); 
          } 
        }
  