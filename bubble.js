//algo for bubble sort

function bubble(){
    for(var i=0;i<array_size-1;i++){
        for(var j=0;j<array_size-i-1;j++){
            //compare j and j++
            if(div_sizes[j]>div_sizes[j+1]){
                //swap both
                console.log(div_sizes[j])
                var temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;
            }
        }
    }
}