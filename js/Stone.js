class Stone{
    constructor(x,y,r){
        var options={
            isStatic:true
        }
      this.body = Bodies.circle(x,y,r,options);
      this.r = 30;
    }
  display(){
      fill("white");
  }
}