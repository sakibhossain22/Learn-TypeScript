type Tuser = {
    name: string;
    age: number
}
type Role = {
    role: 'Admin' | 'Guest'
}

type ExtraSkill = Tuser & Role

// Interface

interface Iuser {
    name: string;
    age: number
}
interface IRole extends Iuser {
    role: 'Admin' | 'Guest'
}
const userData : IRole = {
    name : 'Shakib',
    age : 41,
    role : "Admin"
}