const list_1 = [
    100,
    200,
    500,
    800,
    400000000,
]


function findMedian(list){
list = list.sort((a,b)=>{return a-b})
if (list.length % 2 === 0){
    const middleUp = parseInt(list.length / 2);
    const middleDown = parseInt(middleUp - 1);
    return median = (list[middleUp] + list[middleDown])/2;
}
else {
    const middleList_1 = parseInt(list.length / 2);
    return median = list[middleList_1];
}};

