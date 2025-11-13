type User = {
    userName: string;
    age: number;
    gender: 'Male' | 'Female'
}

const webUser: User = {
    userName: 'Shakib Hossain',
    age: 45,
    gender: 'Male'

}
type sum = (num1 : number, num2: number) => number
const sumFunc : sum = (num1, num2) => {
    return num1 + num2
}