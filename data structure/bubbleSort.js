function bubble(arr){
    let n=arr.length;
    for(let i=n;i>=1;i--){
        for(let j=0;j<i;j++){
        if(arr[j-1]>arr[j]){
            let temp=arr[j-1];
            arr[j-1]=arr[j];
            arr[j]=temp;
        }
        }
    }

}
let arr=[98,67,45,63,5,6,2,8,7,6];
console.log(arr);


bubble(arr);
console.log(arr);
arr.includes(2);
// let r=[2,3,4,5];
// let rev=r.reverse();
// console.log(rev);