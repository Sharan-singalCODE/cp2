class Ground {
    constructor(x, y) {
      var options = {
          isStatic:true,
        
      }
      this.body = Matter.Bodies.rectangle(x, y,800,17, options);
 
      
      World.add(world, this.body);
    }
    display(){
      rectMode(CENTER);
      fill(255);
      strokeWeight(4)
      stroke("RED")
      rect(this.body.position.x,this.body.position.y,800,20);
 
    }
  };
