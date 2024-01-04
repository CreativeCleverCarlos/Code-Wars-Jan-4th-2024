//Count the number of divisors of a positive integer n.

/**  
    4--> 3 // we have 3 divisors - 1, 2 and 4
    5 --> 2 // we have 2 divisors - 1 and 5
    12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
    30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
**/

function getDivisorsCnt(n){

    let total = 0
    for (let i = 0; i <=n; i++){
        if (n % i == 0){
            ++total
        }
        
    }
    return total

    //only the count of divisors need to be added up
    //a divisor will be a number that when divided, has a remainder of 0
}

console.log(getDivisorsCnt(2))