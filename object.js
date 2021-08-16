class Floor{
    constructor(x,y,w,h,body){
  
      this.x = x
      this.y = y
      this.w = w
      this.h = h
    
      this.body=Matter.Bodies.rectangle(x,y,w,h,{isStatic:true})
      Matter.World.add(world,this.body)

    }
    display(){
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.w,this.h)
    }
    
    
  }