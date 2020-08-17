class Paper
{
constructor(x,y,width,height)  {
        var options={
            isStatic:false,
            restitution:0.5,
            friction:0.5,
            density:0.5,
 
            
            }
        
        this.width=width;
        this.height=height;
        this.body=Bodies.circle(x,y, 50, options)
    
        this.image=loadImage('paperimg.png')
        World.add(world, this.body);
 
    }
    display()
    {
            
            var paperpos=this.body.position;        
 
            push()
            translate(paperpos.x, paperpos.y);
            rotate(this.body.angle);
            rectMode(CENTER)
            strokeWeight(3);
            fill(255,0,255)
            imageMode(CENTER)
            image(this.image,0,0,this.width,this.height)
            pop()
            
    }
}
