/*
the program will print the prime numbers between 1 to 100
*/
let start = 1;
let end = 100;
for(let i = start;i<=end;i++){
    let cnt = 0;
    for(let j = start;j<=i;j++){
        if(i%j==0)
            cnt++;
    }
    if(cnt==2)
        console.log(i);
}