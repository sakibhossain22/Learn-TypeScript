// Type Declaration in Normal Function
function sum(num1: number, num2: number): number {
    return num1 + num2
}
console.log(sum(4,6));
// Type Decleration in arrow Function
const sum2 = (num1: number, num2 : number): number => num1 + num2
console.log(sum2(3,5));
// Type Declaration using Method
const bankUser = {
    userName : 'Shakib',
    balance : 0,
    addBalance (value:number):number {
        return this.balance + value
    } 
}