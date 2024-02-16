class solution{
    missingNumber(arr,n){
        let total=n*(n+1)/2;
        let currentTotal=0;
        for(let i=0;i<n-1;i++){
            currentTotal+=arr[i];

        }
        var missing=total-currentTotal;
        return missing;
    }
   
}
console.log(missing);