type UserData1 = {
    userName: string;
    age: number;
    salary: number;
}

const userData1: UserData1 = {
    userName: 'Shakib',
    age: 20,
    salary: 20000
}
const student: {
    name: string;
    roll: number;
    section: string
} = {
    name: 'Shakib',
    roll: 41,
    section: 'A'
}
const getUserData = <S>(obj: S, key: keyof S) => {
    return obj[key]
}
const res4 = getUserData(userData1, "age")
console.log(res4);
const res5 = getUserData(student, "name")
console.log(res5);
