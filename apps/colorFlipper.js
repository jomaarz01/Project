const origColor = '#daffed'

const origColorButton = document.getElementById('orig-color-button');

origColorButton.addEventListener('click', function(){
  color.textContent = origColor;
  document.body.style.backgroundColor = origColor;
})

const color = document.querySelector(".js-color");

const hex = [0,1,2,3,4,5,6,7,8,9, "A", "B", "C", "D", "E", "F"];

const hexButton = document.getElementById('hex-button');

hexButton.addEventListener('click', function(){
  let hexcolors= '#';

  for (let i = 0; i<6 ; i++){
    let randomHexNumber = Math.floor(Math.random() * hex.length);
    hexcolors += hex[randomHexNumber];
  }

  color.textContent = hexcolors;
  document.body.style.backgroundColor = hexcolors;
})

const rgbButton = document.getElementById('rgb-button');

rgbButton.addEventListener('click',function(){
  let rgb = {
    a: Math.floor(Math.random()* 256),
    b:Math.floor(Math.random()* 256),
    c:Math.floor(Math.random()* 256)};

  const rgbColor = `rgb(${rgb.a},${rgb.b},${rgb.c})`;
  color.textContent = rgbColor;

  document.body.style.backgroundColor = rgbColor;
})

const hslButton = document.getElementById('hsl-button');

hslButton.addEventListener('click',function(){
  let hsl = {
    a: Math.floor(Math.random()*361),
    b: Math.floor(Math.random()*101),
    c: Math.floor(Math.random()*101)
  }
  const hslColor = `hsl(${hsl.a},${hsl.b}%,${hsl.c}%)`;
  color.textContent = hslColor;
  document.body.style.backgroundColor = hslColor;
})