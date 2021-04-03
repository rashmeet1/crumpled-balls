class Paper {
  
   constructor(x,y){
    var options = {
        
          'restitution':0.3,
          'friction':0,
          'density':1.2,
}
      
      thisbody = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height =50;
      
      World.add(world, this.body);
      this.image = loadImage("paper.png");

    
   
      
  }

    display(){
      
      var pos = this.body.position;

      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4); 
      stroke("blue");

      fill("orange");

      rect(0, 0, this.width, this.height);
      pop();
    }

  }

  function keyPressed() {
    if(keyCode=== UP_ARROW){
    
      Matter.body.applyForce(paper.body,paper.body.position,{x:130,y:-145});
    
    }
        }
       
  



  
 