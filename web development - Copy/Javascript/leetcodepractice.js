// -------------------count 1 in 32 bit ]]]]]]]]]]]]
// let a = 000001011;
// let b = a.toString(2);
// // let c = b.split('').filter(item=>item==1).length;
// let c =(b.match(/1/g) || []).length;
// console.log(c);

// ---------------substract product and addition of the number----------

// let a = 10.8;
// let b = Math.floor(a);
// console.log(b);

//---------------------1779 find two point distance---------
// var nearestValidPoint = function(x, y, points) {
//     let shortestDistance = Number.MAX_SAFE_INTEGER;
//     let shortestDistanceIndex = -1;
  
//     points.forEach((point, index) => {
//     if(point[0] !== x && point[1] !== y) {
//       index++;
//       return;
//     }
  
//     let distance = Math.abs(x - point[0]) + Math.abs(y - point[1]);
//     if (distance < shortestDistance) {
//       shortestDistanceIndex = index;
//       shortestDistance = distance;
//     }
//   });
  
//     return shortestDistanceIndex;
//   };
//   let b = nearestValidPoint(3,4,[[1,2],[3,1],[2,4],[2,3],[4,4]]);
//   console.log(b);

//-----------------1822 leetcode----------
var arraysign = function(num){
    let navnum = num.filter(n=>n<0).length;
    if(num.includes(0)) return 0;
    return navnum%2===0 ? 1: -1
  
};
let b = arraysign([1,2,3,4,-5,6,-8]);
console.log(b); 