//buble sorting
 function bubble(){
    for(var i=0;i<array_size-1;i++){
      
      for(var j=0;j<array_size-i-1;j++){
        //I want to change the color of this both bars
        div_update(divs[j],div_sizes[j],"Yellow")
        // div_update(divs[j+1],div_sizes[j+1],"red")
        //compare j and j++
        if(div_sizes[j]>div_sizes[j+1]){
          //swap both
          var temp=div_sizes[j];
          div_sizes[j]=div_sizes[j+1];
          div_sizes[j+1]=temp;
          div_update(divs[j],div_sizes[j], "Red");//Height update
          div_update(divs[j+1],div_sizes[j+1], "red");//Height update
        }
        //color update
        div_update(divs[j],div_sizes[j],"blue")
      }
      div_update(divs[j],div_sizes[j],"Green") //element has been sorted
    }
    div_update(divs[0],div_sizes[0],"Green")
    c_delay=0;
  
  }
  
