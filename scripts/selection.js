//in this we find minimum of given and swap it with beganing

function selection(){
    for(let i=0;i<array_size-1;i++){
        let min_index=i;
        div_update(divs[min_index],div_sizes[min_index],"pink");//smallest element as pinkk
        for(let j=i+1;j<array_size;j++){
            //find mim
            //checking j
            div_update(divs[j],div_sizes[j],"yellow");
            if(div_sizes[j]<div_sizes[min_index]){
                div_update(divs[min_index],div_sizes[min_index],"blue");
                min_index=j;
                div_update(divs[min_index],div_sizes[min_index],"pink");
                
            }
            else if(div_sizes[j]>div_sizes[min_index]){
                div_update(divs[j],div_sizes[j],"blue")
            }
        }

        div_update(divs[i],div_sizes[i], "red");
        div_update(divs[min_index],div_sizes[min_index], "red");
        //swap index(min) and i only using this 
        var temp=div_sizes[min_index];
        div_sizes[min_index]=div_sizes[i];
        div_sizes[i]=temp;
        //changing color while swaping
        div_update(divs[i],div_sizes[i], "Green");//Height update
        if(i!=min_index){
            //without if conditijon it was messy
            div_update(divs[min_index],div_sizes[min_index], "blue");//color update
        }
    }
    //for last element which has been already sorted after the entire process
    
    div_update(divs[array_size-1],div_sizes[array_size-1], "green");//color update
    c_delay=0;
}

////done