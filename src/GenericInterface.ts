interface Developer<T, X = null> {
    name: string;
    salary: number;
    device: {
        brand: string;
        model: string;
        releaseYear: number
    }
    smartWatch: T;
    bike?: X;
}

const poorDeveloper: Developer<{ heartRate: string, stopWatch: boolean },{bikeName : string, bikeModel : string}> = {
    name: 'shakib',
    salary : 15444,
    device : {
        brand : 'lenovo',
        model : '47',
        releaseYear : 2015
    },
    smartWatch: {
        stopWatch: true,
        heartRate: '200'
    },
    bike : {
        bikeName : 'dsrs',
        bikeModel: 'Yamaha'
    }
}