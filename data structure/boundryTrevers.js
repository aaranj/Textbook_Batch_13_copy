let arr=[[1,2,3,4],
        [5,6,7,8],
        [9,10,11,12],
        [13,14,15,16]];
       let ans=[];
       let n=arr.length;
       let m=arr[0].length;
       for(let j=0;j<m-1;j++){
       ans.push(arr[0][j]);
       }
    for(let i=1;i<n-1;i++){
    ans.push(arr[i][m-1]);
    }
for(let j=m-2;j>=0;j--){
    ans.push(arr[n-1][j]);
}

for(let i=n-2;i>=1;i++){
    ans.push(arr[i][0]);
}

console.log(ans);