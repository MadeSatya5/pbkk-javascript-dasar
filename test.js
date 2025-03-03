const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function isPrime (number) {
    for(let i = 2; i < number; i++){
        if(number % i === 0){
            return 0;
        }
    }
    return number;
}

const result = arr.map((el) => {
    const filter = arr.filter((el) => el % 2 === 0);
    const rdc = filter.reduce((acc, el) => acc + isPrime(el) , 0)
    return el + rdc;
} )
console.log(result);
