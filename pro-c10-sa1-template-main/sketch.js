var weights_array = [1.0,1.2,1.3,1.4,1.5,1.6,1.8,2.0,2.4,2.5]
function average() {
  var total= weights_array [0]+weights_array [1]+weights_array [2]+weights_array [3]+weights_array [4]+weights_array [5]+weights_array [6]+weights_array [7]+weights_array [8]+weights_array [9]
  var average=total/weights_array.length
  console.log (average)
}
function setup() 
{
  createCanvas(400,400);
  average()
}

function draw() 
{
background(51);

}

