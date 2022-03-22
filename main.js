
var last_x_position, last_y_position;
var current_x_position, current_y_position;
var mouseevent = "empty";
 
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
 
 
 
 
 
canvas.addEventListener("mousedown", myMouseDown)
 
function myMouseDown(e) {
    mousevent = "mousedown";
    color = document.getElementById("color_change").value;
    width_of_line = document.getElementById("width_change").value;
}
 
canvas.addEventListener("mouseleave", myMouseLeave)
function myMouseLeave(e) {
    mousevent = "mouseleave";
}
 
canvas.addEventListener("mouseup", myMouseUp)
function myMouseUp(e) {
    mousevent = "mouseup";
}
 
canvas.addEventListener("mousemove", myMouseMove)
function myMouseMove(e){
    current_x_position = e.clientX - canvas.offsetLeft;
current_y_position = e.clientY - canvas.offsetTop;
color = document.getElementById("color-input").value;
width = document.getElementById("width-input").value;
radius = document.getElementById("radius-input").value;
 if (mousevent == "mousedown") {
     ctx.beginPath();
     ctx.strokeStyle = color;
     ctx.lineWidth = width;
     console.log("last x position = " + last_x_position + ", last y position = " + last_y_position)
     ctx.arc(last_x_position, last_y_position, radius, 0, 2 * Math.PI)
     ctx.arc(current_x_position, current_y_position, radius, 0, 2 * Math.PI)
     console.log("current x position = " + current_x_position + ", current y position = " + current_y_position);
     ctx.stroke();
 }
 last_x_position = current_x_position;
 last_y_position = current_y_position;
}
 function clearrect() {
     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
 }
