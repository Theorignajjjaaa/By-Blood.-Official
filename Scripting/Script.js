var i = 0;
var txt = '..';
var speed = 250;

let Darktog = document.querySelector('.mod1');
let Roots = document.querySelector(':root')



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
    document.querySelector('.text').innerHTML = "By Blood ";
    i = 0;
  }
  
}

eRAZEWriter()
typeWriter()


function onT() {
  window.open("https://www.youtube.com/watch?v=hvL1339luv0", "_blank");
}

function onDark() {
  Darktog.classList.toggle('DarkMode');
  Roots.classList.toggle('DarkMode');
  /*if (Darktog.innerHTML == "L"){
    Darktog.innerHTML = "D";
  }
  else{
    Darktog.innerHTML = "L";
  }
  */
}



