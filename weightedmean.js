const measures = [
    {
    "weigh" : 1,
    "days" : 10,
    "weight" : 1.24
    },
    {
    "weigh" : 2,
    "days" : 15,
    "weight" : 1.18
    },
    {
    "weigh" : 3,
    "days" : 20,
    "weight" : 0.85
    },
]

// const values = []
// const listdays = []

// measures.forEach(function(measure){
//     values.push(measure.weight * measure.days)
//     listdays.push(measure.days)
// });

// let totalValue = 0;

// for(var i = 0; i < values.length; i++){
//     totalValue += values[i];
// }

// let totalDays = 0;

// for(var i = 0; i < listdays.length; i++){
//     totalDays += listdays[i];
// }

// const finalResult = totalValue / totalDays 

// In a function

function weightedMean(myList){
    const values = []
    const listdays = []

    myList.forEach(function(measure){
    values.push(measure.weight * measure.days)
    listdays.push(measure.days)
    });

    let totalValue = 0;

    for(var i = 0; i < values.length; i++){
    totalValue += values[i];
    }

    let totalDays = 0;

    for(var i = 0; i < listdays.length; i++){
    totalDays += listdays[i];
    }

    return finalResult = totalValue / totalDays 
};