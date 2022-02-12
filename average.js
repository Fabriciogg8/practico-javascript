const list_1 = [
    100,
    200,
    300,
    500
]

let sumlist_1 = 0;

for (var i=0; i < list_1.length; i++){
    sumlist_1 += list_1[i];
}

const averageList_1 = sumlist_1 / list_1.length

// Inside a function

function average(myList){
    let sumlist = 0;
    for (var i=0; i < myList.length; i++){
    sumlist += myList[i];
    }
    const averageList = sumlist / myList.length
    return averageList
};

// Another way

function average2(myList){
    const sumlist = myList.reduce((a,b) => a + b)
    const averageList = sumlist / myList.length
    return averageList
}