function isPrime(num) {
    let cnt = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i == 0)
            cnt++;
    }
    if (cnt == 2)
        return "Prime";
    else
        return "Not Prime";
}
result = isPrime(9);
console.log(result);