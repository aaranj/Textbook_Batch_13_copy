let arr=[[1,2,3],[4,5,6],[7,8,9]];
let r=3,c=3;
for(let i=0;i<r;i++){
    for(let j=0;j<c;j++){
        let temp=arr[i][j];
        arr[i][j]=arr[j][i];
        arr[j][i]=temp;
    }
}
console.log(arr);