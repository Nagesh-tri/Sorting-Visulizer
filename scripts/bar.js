
//variables
let array_size=100;
let div_sizes=[];   //arrary for random array size in
let divs=[];

let cont =document.getElementById("bars_container")
let gen = document.getElementById("gen_rand_array")


/////

//cont style


//gsenrate random array
gen.addEventListener("click",rand_array)
function rand_array(){
  //feature: randome color everytime
  const randomColor = Math.floor(Math.random()*16777215).toString(16);

    //init html of bars_container in div in HTML page

    cont.innerHTML="";
    for(var i=0;i<array_size;i++){
        //genrate random number by math fxn in js
        div_sizes[i]=Math. floor(Math. random() * 100) + 10;
        // console.log(div_sizes[i]).....just for testing purpose
        //add a bar of size genrated num 
      divs[i]=document.createElement("div");
      cont.appendChild(divs[i]);
      margin_size=0.1;
      //giving width  to bar and for a proper loop with the help of random numbers and size of array so that it covers the whole screeen 
      divs[i].style="margin:0%"+ margin_size +"%; background-color: #"+randomColor+"; width:"+(1000/array_size-(2*margin_size))+"%; height:"+ div_sizes[i]+"%;" ; 
    }

}



//check
//for bubble
document.getElementById("bub").addEventListener("click",bubble)
document.getElementById("selc").addEventListener("click",selection)
document.getElementById("insertion").addEventListener("click",insertion)
// document.getElementById("bub").onclick = function() {
//   bubble;
// }




