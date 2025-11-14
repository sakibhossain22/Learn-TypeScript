let val: any
val = 4;
(val as string)

const kgToGramConverter = (input : number | string) => {
    if(typeof input === "number") {
        return input * 1000
    } else if(typeof input === "string") {
        const [split] = input.split(" ")
        return Number(split) * 1000
    } else {
        return 'You Have to enter String and number only'
    }
}

const result = kgToGramConverter(5) as number
console.log(result);
const result2 = kgToGramConverter('5 KG') as string 
console.log(result2);