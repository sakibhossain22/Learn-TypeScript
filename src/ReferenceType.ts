// Object Type Declaration using TS
const user: {
    firstName: string;
    middleName: string;
    lastName: string
} = {
    firstName: 'Md',
    middleName: 'Shakib',
    lastName: 'Hossain'
}

// Object Optional Type Declare
const user2: {
    firstName: string;
    middleName?: string;
    lastName: string
} = {
    firstName: 'Md',
    lastName: 'Hossain'
}
// Read Only And Object Type Using Value(fixed Value)
const user3: {
    // using value as type
    organization: 'Programming Hero';
    readonly organization2: string;
    firstName: string;
    lastName: string;
} = {
    organization: 'Programming Hero',
    organization2: 'Next Level Web Developement',
    firstName: 'Shakib',
    lastName: 'Hossain'
}
// giving Error because Of access Modifier (readonly)
user3.organization2 = 'S'