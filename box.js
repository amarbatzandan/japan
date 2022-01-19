class Box
  {
    constructor(x,y,w,h)
    {
      this.x =x;
      this.y =y;
      this.w =w;
      this.h = h;
    }
    
    show()
    {
      rect(this.x,this.y,this.w,this.h)
    }
    up(){
      this.y=this.y-1
    }
    down(){
      this.y=this.y+1.1111111111
    }
    left(){
      this.x=this.x-1
    }
    right(){
      this.x=this.x+1.1
    }
  }

  
