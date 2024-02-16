let col=3,row=3;
function checkInde(a){
    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            if(i==j && a[i][j]!=1)
            return false;
        }
    }
    return true;
}
let a=[[1,0,0],[0,1,0],[0,0,1]];
console.log(checkInde(a));