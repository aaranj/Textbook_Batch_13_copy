function selection(arr){
    let n=arr.length;
    for(var i=0;i<n-1;i++){
        var smallest=i;
        for(var j=j+1;j<n;j++){
            if(arr[j]<arr[smallest]){
               smallest=j;
            }
        }
        let temp=arr[smallest];
        arr[smallest]=arr[smallest];
        arr[i]=temp;
    }
    
}
let arr=[10,9,8,7,6,5,4,3];
console.log(arr);
selection(arr);
console.log(arr);
