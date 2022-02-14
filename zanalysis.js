const salariesUru = uruguay.map(function(person){
    return person.salary;
});

const salariesUruSorted = salariesUru.sort(function(salaryA, salaryB){
    return salaryA - salaryB;
});

// Helper Functions 

function isPair(list){
    return (list.length % 2 === 0)
};

// Median Calculator

function findMedian(anotherList){
    const middleList = parseInt(anotherList.length / 2);
    if (isPair(anotherList)){
        const middleDown = parseInt(middleList - 1);
        return median = (anotherList[middleList] + anotherList[middleDown])/2;
    }
    else{
        return median = anotherList[middleList];
    }
};

// Median of top 10%

const spliceStart = salariesUruSorted.length * 0.9;
const spliceCount = salariesUruSorted.length - spliceStart;
const salariesUruTop10 = salariesUruSorted.splice(spliceStart,spliceCount)

const generalMedianUru = findMedian(salariesUruSorted)
const topTenMedianUru = findMedian(salariesUruTop10)

console.log(topTenMedianUru)
