function linear(arr,n){
    for(var i=0;i<arr.length;i++){
        if(arr[i]==n){
            var w=1;
            break;
        }
    }
    if(w==1){
        console.log(`${n} is found at possiton ${i}`);
    }
    else{
        console.log(`not found ${n}`);
    }


}
let arr=[3,5,3,4,7,9,8,10];
let n=9;
console.log(arr,n);
linear(arr,n);



function binary(arr2,p){
    let mid,flag=0;
        let low=0,upp=9;
    while(low<=upp){
        mid=(low+upp)/2;
        if(p>arr2[mid]){
            low=mid+1;
        }
        else if(p<arr2[mid]){
            upp=mid-1;

        }
        else{
            flag=1;
            break;
        }
    }
    if(flag==1)
console.log(`${p} is found at posstion ${[mid]}`);
else{
   console.log(`${p} is not found`);
}
}




let arr2=[3,5,6,7,8,9,12,23,45,66];
let p=45;
console.log(arr2);
binary(arr2,p);

