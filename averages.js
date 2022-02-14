// Average

function average(){
    let text = document.getElementById("laverage").value;
    text = text.split(",");

    let myList = [];
    text.forEach(function(i){
        i = parseInt(i);
        myList.push(i)
    });

    let sumlist = 0;
    for (var i=0; i < myList.length; i++){
    sumlist += myList[i];
    };
    
    const averageList = document.getElementById("paverage");
    averageList.innerText = "The average result is = " + sumlist / myList.length; 
};

// Median

function findMedian(){
    let text = document.getElementById("lmedian").value;
    text = text.split(",");

    let myList = [];
    text.forEach(function(i){
        i = parseInt(i);
        myList.push(i)
    });

    myList = myList.sort((a,b)=>{return a-b})
    if (myList.length % 2 === 0){
        const middleUp = parseInt(myList.length / 2);
        const middleDown = parseInt(middleUp - 1);
        median = (myList[middleUp] + myList[middleDown])/2;
    }
    else {
        const middleList_1 = parseInt(myList.length / 2);
        median = myList[middleList_1]
    };    
    const finalMedian = document.getElementById("pmedian");
    return finalMedian.innerText = "The median result is = " + median; 
};

// Mode

function findMode(){
    let text = document.getElementById("lmode").value;
    text = text.split(",");

    let myList = [];
    text.forEach(function(i){
        i = parseInt(i);
        myList.push(i)
    });

    let listArray = [];
    let listCount = {};

    myList.map(function(elemento){
        if (listCount[elemento]){
            listCount[elemento] += 1;
        } else {
            listCount[elemento] = 1;
        }
    })
    
    listArray = Object.entries(listCount).sort(
    function(a, b){return a[1]-b[1]}
    );

    mode = parseInt(listArray[listArray.length - 1][0])
    const finalMode = document.getElementById("pmode");
    return finalMode.innerText = "The mode result is = " + mode;
};

// Weighted Mean


function weightedMean(){
    let myObject = document.getElementById("lweightedMean")
    const values = []
    const listdays = []

    myObject.forEach(function(measure){
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

    const finalResult = document.getElementById("pweightedMean");
    finalResult.innerText = totalValue / totalDays 
};