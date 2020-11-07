var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

function placeScab(){
  var topShift = Math.random()*500;
  var leftShift = Math.random()*750;
  canvas.style.top=topShift + 'px';
  canvas.style.left=leftShift + 'px';
  alert("pick the scab");

      // begin custom shape
      context.beginPath();
      context.moveTo(170, 80);
      context.bezierCurveTo(130, 100, 130, 150, 230, 150);
      context.bezierCurveTo(250, 180, 320, 180, 340, 150);
      context.bezierCurveTo(420, 150, 420, 120, 390, 100);
      context.bezierCurveTo(430, 40, 370, 30, 340, 50);
      context.bezierCurveTo(320, 5, 250, 20, 250, 50);
      context.bezierCurveTo(200, 5, 150, 20, 170, 80);

      // complete custom shape
      context.closePath();
      context.lineWidth = 5;
      context.strokeStyle = '#560502';
      context.stroke();
      context.fillStyle = '#993835';
      context.fill();
}
window.onload = placeScab;

var clicks = 0;

// shrink the scab
canvas.addEventListener('click', makeScaled, false);

// shrink scab on click
function makeScaled(){
      clicks++;

      // make blood
if(clicks==1){
      context.clearRect(0,0,canvas.width, canvas.height);
      context.beginPath();
      context.moveTo(170, 80);
      context.bezierCurveTo(130, 100, 130, 150, 230, 150);
      context.bezierCurveTo(250, 180, 320, 180, 340, 150);
      context.bezierCurveTo(420, 150, 420, 120, 390, 100);
      context.bezierCurveTo(430, 40, 370, 30, 340, 50);
      context.bezierCurveTo(320, 5, 250, 20, 250, 50);
      context.bezierCurveTo(200, 5, 150, 20, 170, 80);

      // complete custom shape
      context.closePath();
      context.lineWidth = 5;
      context.strokeStyle = '#960307';
      context.stroke();
      context.fillStyle = '#ef3752';
      context.fill();

        // make scab
      context.scale(.5,.5);
      context.translate(canvas.width/2, canvas.height/2);
      context.beginPath();
      context.moveTo(170, 80);
      context.bezierCurveTo(130, 100, 130, 150, 230, 150);
      context.bezierCurveTo(250, 180, 320, 180, 340, 150);
      context.bezierCurveTo(420, 150, 420, 120, 390, 100);
      context.bezierCurveTo(430, 40, 370, 30, 340, 50);
      context.bezierCurveTo(320, 5, 250, 20, 250, 50);
      context.bezierCurveTo(200, 5, 150, 20, 170, 80);

      // complete custom shape
      context.closePath();
      context.lineWidth = 5;
      context.strokeStyle = '#560502';
      context.stroke();
      context.fillStyle = '#993835';
      context.fill();
}
  else if(clicks>1 && clicks<5){
// Use the identity matrix while clearing the canvas
context.setTransform(1, 0, 0, 1, 0, 0);
context.clearRect(0, 0, canvas.width, canvas.height);

      // first blood
      context.clearRect(0,0,canvas.width, canvas.height);
      context.beginPath();
      context.moveTo(170, 80);
      context.bezierCurveTo(130, 100, 130, 150, 230, 150);
      context.bezierCurveTo(250, 180, 320, 180, 340, 150);
      context.bezierCurveTo(420, 150, 420, 120, 390, 100);
      context.bezierCurveTo(430, 40, 370, 30, 340, 50);
      context.bezierCurveTo(320, 5, 250, 20, 250, 50);
      context.bezierCurveTo(200, 5, 150, 20, 170, 80);

      // complete custom shape
      context.closePath();
      context.lineWidth = 5;
      context.strokeStyle = '#960307';
      context.stroke();
      context.fillStyle = '#ef3752';
      context.fill();
    // next blood
    for(i=1; i<clicks; i++){
      context.scale(.5,.5);
      context.translate(canvas.width/2, canvas.height/2);
      context.beginPath();
      context.moveTo(170, 80);
      context.bezierCurveTo(130, 100, 130, 150, 230, 150);
      context.bezierCurveTo(250, 180, 320, 180, 340, 150);
      context.bezierCurveTo(420, 150, 420, 120, 390, 100);
      context.bezierCurveTo(430, 40, 370, 30, 340, 50);
      context.bezierCurveTo(320, 5, 250, 20, 250, 50);
      context.bezierCurveTo(200, 5, 150, 20, 170, 80);

      // complete custom shape
      context.closePath();
      context.lineWidth = 5;
      context.strokeStyle = '#960307';
      context.stroke();
      context.fillStyle = '#ef3752';
      context.fill();
    }
          // make scab
      context.scale(.5,.5);
      context.translate(canvas.width/2, canvas.height/2);
      context.beginPath();
      context.moveTo(170, 80);
      context.bezierCurveTo(130, 100, 130, 150, 230, 150);
      context.bezierCurveTo(250, 180, 320, 180, 340, 150);
      context.bezierCurveTo(420, 150, 420, 120, 390, 100);
      context.bezierCurveTo(430, 40, 370, 30, 340, 50);
      context.bezierCurveTo(320, 5, 250, 20, 250, 50);
      context.bezierCurveTo(200, 5, 150, 20, 170, 80);

      // complete custom shape
      context.closePath();
      context.lineWidth = 5;
      context.strokeStyle = '#560502';
      context.stroke();
      context.fillStyle = '#993835';
      context.fill();
  }
  else{
// Use the identity matrix while clearing the canvas
context.setTransform(1, 0, 0, 1, 0, 0);
context.clearRect(0, 0, canvas.width, canvas.height);

    alert("You picked the scab!");
    var sat = prompt("Satisfied? Y or N:");
    switch(sat){
      case "N": alert("Course you're not!");
      location.reload();
      case "Y": break;
      case "y": break;
      case "sing a song": alert("This is a song! What makes written text a song? If it says it's a song, then so it is a song. What is the melody? It has a melody. What is the rhythm? Let's be honest, if you're asking a scab picker for a song, you must have a funky taste in music.");
      location.reload();
      break;
      default: alert("Course you're not!");
      location.reload();
    }
  }

}
