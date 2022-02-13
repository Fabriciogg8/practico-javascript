const list_1 = [
    1,2,3,1,2,3,4,2,2,2,1
];

// const listCount = {};

// list_1.map(function(elemento){
//     if (listCount[elemento]){
//         listCount[elemento] += 1;
//     } else {
//         listCount[elemento] = 1;
//     }
// });

// Converting our object back into an array 

// const listArray = Object.entries(listCount).sort(
//     function(a, b){return a[1]-b[1]}
// );

// const mode = listArray[listArray.length - 1]


function findMode(list_1){
    let listArray = [];
    let listCount = {};

    list_1.map(function(elemento){
        if (listCount[elemento]){
            listCount[elemento] += 1;
        } else {
            listCount[elemento] = 1;
        }
    })
    
    listArray = Object.entries(listCount).sort(
    function(a, b){return a[1]-b[1]}
    );
    
    return mode = listArray[listArray.length - 1]
};