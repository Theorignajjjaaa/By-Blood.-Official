var i = 0;
var txt = '..';
var speed = 250;





function typeWriter() {
    if (i < txt.length) {
      document.querySelector('.text').innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
    eRAZEWriter()
    
}
function eRAZEWriter() {
  if (i == txt.length) {
    document.querySelector('.text').innerHTML = "By Blood";
    i = 0;
  }
  
}

eRAZEWriter()
typeWriter()


function onT() {
  window.open("https://www.youtube.com/watch?v=hvL1339luv0", "_blank");
}



