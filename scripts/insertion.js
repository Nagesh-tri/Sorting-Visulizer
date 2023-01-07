//insertion sort 
/*
basic concept is we have two parts in our array
one is sorted and another is unsorted 
we #INSERT elements one by one in sorted from unsorted on its right position
so thaat whole arary tends to sorted. */
//logic
function insertion(){
    c_delay=0;
    //let 1st element is sorted
    // div_update(divs[0],div_sizes[0],"pink");
    //travel to whole 
    for(var i=0;i<array_size;i++){
        //picking up current value which is to be inserted at right
        div_update(divs[i],div_sizes[i],"yellow");//Color update
        var current=div_sizes[i];
        //chaging color while picking
        
        //until the current is smaller push the values at 1 index higher
        let j=i-1;
        //pick j changed color
        while(j >=0 && current<div_sizes[j]){
            div_update(divs[j],div_sizes[j],"red");//Color update
            div_update(divs[j+1],div_sizes[j+1],"red");//Color update
            //changing position of current element
            div_sizes[j+1]=div_sizes[j];

             div_update(divs[j],div_sizes[j],"red");//Height update
            div_update(divs[j+1],div_sizes[j+1],"red");//Height update

            div_update(divs[j],div_sizes[j],"blue");//Color update
            if(j==(i-1))
            {
                div_update(divs[j+1],div_sizes[j+1],"yellow");//Color update
            }
            else
            {
                div_update(divs[j+1],div_sizes[j+1],"blue");//Color update
            }
            j-=1;
        }
        //placement at right index(insretion)
        div_sizes[j+1]=current;
        //color for sorted part
        for(var k=0;k<i;k++){
            div_update(divs[k],div_sizes[k],"Green");
        }
    }
    // div_update(divs[j+1],div_sizes[j+1],"Green")
    div_update(divs[i-1],div_sizes[i-1],"green");//Color update
}