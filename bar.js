
//variables
let array_size=10;
let div_sizes=[];   //arrary for random array size in
let divs=[];

let cont =document.getElementById("bars_container")
let gen = document.getElementById("gen_rand_array")
let bubbleSortBtn = document.getElementById("bubble")
let selectionSortBtn = document.getElementById("selection")
//cont style


//gsenrate random array
gen.addEventListener("click",rand_array)
function rand_array(){
    //init html of bars_container in div in HTML page

    cont.innerHTML="";
    for(var i=0;i<array_size;i++){
        //genrate random number by math fxn in js
        div_sizes[i]=Math. floor(Math. random() * 100) + 10;
        console.log(div_sizes[i])
        //add a bar of size genrated num 
      divs[i]=document.createElement("div");
      cont.appendChild(divs[i]);
      margin_size=0.1;
      //giving width  to bar and for a proper loop with the help of random numbers and size of array so that it covers the whole screeen 
      divs[i].style="margin:0%"+ margin_size +"%; background-color:blue; width:"+(1000/array_size-(2*margin_size))+"%; height:"+ (div_sizes[i]+10)+"%;" ; 
    }

}
bubbleSortBtn.addEventListener("click",bubble)
selectionSortBtn.addEventListener("click",selection)




