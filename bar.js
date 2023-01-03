
//variables
let array_size=10;
let div_sizes=[];   //arrary for random array size in
let divs=[];

let cont =document.getElementById("bars_container")
let gen = document.getElementById("gen_rand_array")


/////
let arr=[];
function rand_hig(){
  for(var i=0;i<array_size;i++){
    arr[i]=Math. floor(Math. random() * 100) + 10;
    
  }
}
rand_hig();
console.log(arr)
//cont style


//gsenrate random array
gen.addEventListener("click",rand_array(arr))
function rand_array(arr){
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
      divs[i].style="margin:0%"+ margin_size +"%; background-color: #"+randomColor+"; width:"+(1000/array_size-(2*margin_size))+"%; height:"+ arr[i]+"%;" ; 
    }

}



//check
//for bubble
document.getElementById("bub").addEventListener("click",bubble   )




//buble sorting
async function bubble(){
  for(var i=0;i<array_size-1;i++){
      for(var j=0;j<array_size-i-1;j++){
          //compare j and j++
          if(arr[j]>arr[j+1]){
              //swap both
              var temp=arr[j];
              arr[j]=arr[j+1];
              arr[j+1]=temp;
          }
      }
      console.log(arr[j]);
  }
  rand_array(arr)
}
   


