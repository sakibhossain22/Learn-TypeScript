class Parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name
        this.address = address
        this.age = age
    }

    getSleep(hourSleep: number) {
        return `${this.name} is sleep ${hourSleep} hour everyday`
    }

}
class Son extends Parent {
    collegeTime: number
    constructor(name: string, age: number, address: string, collegeTime: number) {
        super(name, age, address)
        this.collegeTime = collegeTime
    }
    wakeUpTime (time : number) {
         return `${this.name} Wake Up In The Morning ${time} o'clock everyday`
    }
}

const parentClass = new Parent('Sohidul Islam', 45, 'Mubarakpur')
const sonClass = new Son('Shakib Hossain', 22, 'Mubarakpur', 8)
console.log(sonClass.name);
console.log(sonClass.age);
console.log(sonClass.getSleep(5));
console.log(sonClass.wakeUpTime(6));