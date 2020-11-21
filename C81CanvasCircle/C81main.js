canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color= "red";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40 , 0 , 2 * Math.PI);
ctx.strokeStyle();

canvas.addEventlistener("mousedown", my_mousedown);

function my_mousedown (e)
{
    color= document.getElementById("color").Value;
    console.log(color);
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_Y = e.clientY - canvas.offsetTop;

    console.log("X = " + mouse_x + ", Y ="+ mouse_Y);
    circle(mouse_x, mouse_Y);

}

function circle(mouse_x, mouse_Y);
{
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mouse_x, mouse_Y, 40, 0, 2* Math.PI);
    ctx.stroke();
}


