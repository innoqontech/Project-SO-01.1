
// go to top
mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

// change image in header
let images = [
    "./images/SERVICE/news-5.jpg",
    "./images/SERVICE/gallery-14.jpg",
    "./images/SERVICE//project-2-1.jpg"  
]
let colores=[
    "red",
    "blue",
    "#69bff5"
]
let heading=["Land Transport",
"Air Freight",
"Sea Freight"
]
let disc=["combining transport execution and transport managment services to meet all your land freight needs.",
"Air freight is fast-moving, challanging and constantly changing- its the nature of the business",
"customized solution for your specific  ocean freight requirements are at the heart of our services."

]

let i = 0;
let imageHead = document.getElementsByClassName("top-img")[0];
let box=document.getElementsByClassName("side-cont")[0];
let buttoncolor=document.getElementsByClassName("btn")[0];
let head=document.getElementsByClassName("heading")[0];
let discription=document.getElementsByClassName("manipulate")[0];
 setInterval (function () {
     imageHead.style.backgroundImage = "url(" + images[i] + ")";
    box.style.backgroundColor = colores[i];
    buttoncolor.style.color = colores[i];
    head.innerHTML=heading[i];
    discription.innerHTML=disc[i];
      i = i + 1;
      if (i == images.length) {
        i =  0;
      }
}, 4000);
let next=document.getElementsByClassName("right")[0];
let previous=document.getElementsByClassName("left")[0];

const moveleft=()=>{

    imageHead.style.backgroundImage = "url(" + images[i] + ")";
    box.style.backgroundColor = colores[i];
    buttoncolor.style.color = colores[i];
    head.innerHTML=heading[i];
    discription.innerHTML=disc[i];
      if (i == 0) {
        i =images.length();
      }
      else{
        i = i - 1;

      }
}
const moveright=()=>{

    imageHead.style.backgroundImage = "url(" + images[i] + ")";
    box.style.backgroundColor = colores[i];
    buttoncolor.style.color = colores[i];
    head.innerHTML=heading[i];
    discription.innerHTML=disc[i];
      i = i + 1;
      if (i == images.length) {
        i =  0;
      }
}