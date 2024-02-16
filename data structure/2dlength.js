var maxwelth=function(arr){
    let maxi=0;
    let r=arr.length;
    let c=arr[0].length;
    for(let i=0;i<r;i++){
        let welth=0;
        for(let j=0;j<c;j++){
            welth=arr[i][j];
            }
            maxi=Math.max(maxi,welth);
    }
    return maxi; 
}
let arr=[[1,2,3],[4,5,6],[7,8,9]];
maxwelth(arr);
console.log(arr);