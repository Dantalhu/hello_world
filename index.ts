

function calc(x: number, y: number): number {
    let c = x * y;
    return c;
}

let result = 1
for (let index = 1; index <= 50; index++) {
    result = calc(index,result)
}
console.log(result)
