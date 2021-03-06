class paper {
    
        constructor(x,y,r) {
        // assign options to the paper
        var options={
             isStatic : false,
            restitution: 0.3,
            friction:0,
            density:1.2
        }
           
        
            this.image=loadImage("paper.png")
            this.x=x;
            this.y=y;
            this.r=r;
            this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
            World.add(world, this.body);
    
        }
        display()
        {
                var paperpos=this.body.position;		
                push()
                translate(paperPos.x, paperPos.y);
                rectMode(CENTER)
                fill(255,0,255);
                ImageMode(CENTER)
                image(this.image,0,0,this.r,this.r)
                 pop()
    }
    
        }