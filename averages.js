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
    
    let decimals = document.getElementById("decimals").value
    const averageList = document.getElementById("paverage");
    averageList.innerText = "The average result is = " + (sumlist / myList.length).toPrecision(decimals); 
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

    let decimals = document.getElementById("decimals1").value;
    const finalMedian = document.getElementById("pmedian");
    return finalMedian.innerText = "The median result is = " + median.toPrecision(decimals); 
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
    let text1 = document.getElementById("l1weightedMean").value;
    text1 = text1.split(",");

    let listdays = [];
    text1.forEach(function(i){
        i = parseInt(i);
        listdays.push(i)
    });

    let text2 = document.getElementById("l2weightedMean").value;
    text2 = text2.split(",");

    let values = [];
    text2.forEach(function(i){
        i = parseInt(i);
        values.push(i)
    });

    let finalValues = [];
    for(var i = 0; i<values.length; i++){
        finalValues.push(values[i]*listdays[i])
    }

    let totalValue = 0;

    for(var i = 0; i < finalValues.length; i++){
    totalValue += finalValues[i];
    }

    let totalDays = 0;

    for(var i = 0; i < listdays.length; i++){
    totalDays += listdays[i];
    }

    let decimals = document.getElementById("decimals3").value;
    const finalResult = document.getElementById("pweightedMean");
    return finalResult.innerText = "The Weighted Mean is: " + (totalValue / totalDays).toPrecision(decimals) 
};