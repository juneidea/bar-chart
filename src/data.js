const data = [
    {
    name: 'Adam',
    age: 20,
    salary: 30100
    },
    {
    name: 'Bob',
    age: 60,
    salary: 102000
    },
    {
    name: 'Carla',
    age: 31,
    salary: 57000
    },
    {
    name: 'Dave',
    age: 42,
    salary: 22000
    },
    {
    name: 'Ethel',
    age: 80,
    salary: 91000
    },
    {
    name: 'Frank',
    age: 28,
    salary: 73000
    },
    {
    name: 'Gina',
    age: 21,
    salary: 16000
    }
   ]

const getRatio = (num) => {
    let dec = 1
    let rate
    while( num/dec >= 10) {
        dec *= 10
        if( num/dec < 10) rate = num/dec
    }
    return 1/(dec/100)/rate
}

const scale = {
    age: {
        start: '0',
        max: 100,
        ratio: getRatio(100)
    },
    salary: {
        start: '0',
        max: 150000,
        ratio: getRatio(150000)
    }
}
   
export { data, scale }