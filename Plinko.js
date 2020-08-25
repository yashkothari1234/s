
      class Plinko{
        constructor(x,y,width,height,){
            var options = {
                isStatic : true,
                restitution : 1,
                friction : 0,
                density : 0
            
                
            }
            
            this.body = Matter.Bodies.circle(x,y,10,options);
            this.width = width;
            this.height = height;
            World.add(world, this.body);
           
        }
        display(){

            
            
    
    
    ellipse(this.body.position.x,this.body.position.y,this.width,this.height);
        }
    }