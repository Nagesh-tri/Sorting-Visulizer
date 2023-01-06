//insertion sort 
/*
basic concept is we have two parts in our array
one is sorted and another is unsorted 
we #INSERT elements one by one in sorted from unsorted on its right position
so thaat whole arary tends to sorted. */
//logic
function insertion(){
    //let 1st element is sorted
    //sorted part is shown by pink
    div_update(divs[0],div_sizes[0],"pink");
    // div_update(divs[0],div_sizes[0],"pink");
    //travel to whole 
    for(let i=1;i<array_size;i++){
        //picking up current value which is to be inserted at right
        var current=div_sizes[i];
        //chaging color while picking
        div_update(divs[i],div_sizes[i],"white");
        
        //until the current is smaller push the values at 1 index higher
        let j=i-1;
        //pick j changed color
        while(j >=0 && current<div_sizes[j]){
            div_update(divs[j],div_sizes[j],"yellow");
            //changing position of current element
            div_sizes[j+1]=div_sizes[j];
            div_update(divs[j+1],div_sizes[j+1],"blue");
            //I dont know logically (of insertion sort techinque )is going right or not but 
            //its imp for visulizing
            div_update(divs[j],current,"white"); 
            //updating j and its color
            j--;
        }
        //color for sorted part
        for(var k=0;k<j+1;k++){
            div_update(divs[j],div_sizes[j],"pink");
        }
    //placement at right index(insretion)
    div_sizes[j+1]=current;
}
// div_update(divs[j+1],div_sizes[j+1],"Green")
    c_delay=0;
}