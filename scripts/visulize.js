  //change color to red
  
  //coppied function for visulization
  //but also modified
  let delay_time=100;
  let c_delay=0;
  function div_update(cont,height,color)
  {
      window.setTimeout(function(){
          cont.style=" margin:0% " + margin_size + "%; width:" + (1000/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
          //may be in future we pass here a default arg of c_delay of ++ to solve issue
      },c_delay+=delay_time);
  }
