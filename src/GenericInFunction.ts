const GenericFunction = <X = 0, Y = 0>(ami: X, ami2: Y) => {
    return [ami * ami2]
}
const result3 = (GenericFunction(5, 6))
// console.log(result3);

const addStudentsToCourse = <T, Y>(student: T, student2: Y) => {
    const merge = { ...student, ...student2 }
    return merge
}

const user4 = {
    name: 'Shakib',
    age: 45,
}
const user5 = {
    name: 'Hafizur',
    age: 45,
    car: true
}
const res1 = addStudentsToCourse(user5, user4)
console.log(res1);