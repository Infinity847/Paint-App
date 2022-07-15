function setup() {
    canvas = createCanvas(400,400);
background(225);
}
function draw() {
    if (mouseIsPressed) {
        strokeWeight(5);
        line(mouseX,mouseY,pmouseX,pmouseY);
    }
}
function c() {
    background(225);
}