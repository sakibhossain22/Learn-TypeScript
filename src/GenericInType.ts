type GenericType<T> = Array<T>

const strings: GenericType<string> = ['A', 'B', 'C']
const numbers: GenericType<number> = [14, 45, 44]
const booleans: GenericType<boolean> = [true, false, true]


const userList: GenericType<{ name: string, age: number, salary: number }> = [
    {
        name: 'Shakib',
        age: 42,
        salary: 45220,
    }]
    