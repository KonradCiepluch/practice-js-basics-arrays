const n = 24;
const oddNumbers = [];

for(let i=1; i<=n; i++){
    if(i%2==1) {
        oddNumbers.push(i);
    }
}
for(let i=0; i<oddNumbers.length; i++){
console.log(oddNumbers[i]);
}
