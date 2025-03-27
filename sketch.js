function setup() {
  createCanvas(400, 400);
}

let olhoX
let olhoY

function draw() {
  background("purple");
  
  olhoX = map(mouseX,1,600,130,170)
  olhoY = map(mouseY,1,600,130,170)

  //rosto, nariz e borda
  stroke("black")
  strokeWeight(2)
  fill("yellow")
  circle(200,200,300)
  
  //olho esquerdo
  fill("white")
  circle(150,150,60) //olho esquerdo
  fill("black")
  circle(olhoX, olhoY, 30)
  
  
  //olho direito
  fill("white")
  circle(250,150,60) //olho direito
  fill("black")
  circle(olhoX + 100,olhoY,30)
  
  //nariz
  fill("red")
  triangle(200,180,170,220,220,220)
  
  //linhas
  stroke("brown")
  strokeWeight(7)
  line(225,95,279,101)
  line(123,115,178,113)

  stroke("red")
  strokeWeight(10)
  line(150,270,250,270)
  
  if(mouseIsPressed) {
     console.log(mouseX,mouseY);
     }
}
