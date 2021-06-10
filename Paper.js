class Paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
            restitution:0.3,
            friction:100,
            density:1.2

			}
		this.x=x;
        this.y=y;
		this.r=r;
		this.image = loadImage("paper.png");
		this.body=Bodies.circle(x , y , r , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var paperPos=this.body.position;		

			push()
			translate(paperPos.x, paperPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(225);
            imageMode(CENTER)

			image(this.image , 0 , 0 , 2*this.r , 2*this.r)
			pop()
			
	}

}