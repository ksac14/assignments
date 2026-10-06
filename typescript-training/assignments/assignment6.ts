function isPrime(num: number) : boolean {

if(num<=1) {
    return false
}
else{
    for(let i=2; i<num;i++) {
    if(num%i===0) {
        return false
    }

    }
}

return true
}

let checkPrime = isPrime(89)
console.log(checkPrime)