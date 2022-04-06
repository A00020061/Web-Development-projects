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
// var arraysign = function(num){
//     let navnum = num.filter(n=>n<0).length;
//     if(num.includes(0)) return 0;
//     return navnum%2===0 ? 1: -1

// };
// let b = arraysign([1,2,3,4,-5,6,-8]);
// console.log(b); 

// ---------------------arithmetic progession---------------
// ---------------------------------------------------------
// var check = function(arr){
//     if(arr.length===2)return true;
//     arr.sort((a,b)=>a-b);
//     let d = arr[1]-arr[0];
//     for(let i=2; i<arr.length; i++){
//         if((arr[i]-arr[i-1])!==d){
//             return false;
//         }
//     }
//     return true;
// };
// let mark= check([1,6,16,21,11,35]);
// console.log(mark);
// ---------------------------------
// happy Number
// ---------------------------------
var hapnum = function (n, counter = 0) {
    result = false;
    if (counter < 8) {
        let num = n.toString().split('').map(x => Math.pow(x, 2));
        let numaddition = num.reduce((a, b) => a + b, 0);
        if (numaddition=== 1) {
            return result = true
        } else {
            counter++
            hapnum(numaddition, counter)
        }
    }
    return result;

}
let mark = hapnum(2);
console.log(mark);


// let a= 25;
// let b = a.toString().split('').map((x)=>Math.pow(x,2));
// let c = b.reduce((a,b)=>a+b,0);
// console.log(c);


// ---------------------------
// array square
// ---------------------------

// let a= function(arr){
//     return arr.map(function(x){
//         return Math.pow(x,2);
//     })
// };
// let b = a([1,4,7,8]);
// console.log(b);

// let numornot = n=>isNaN(n)? 0: n
// console.log(['hi',1,2,3,4,'sandy'].reduce((a,b)=>numornot(a)+numornot(b),0));

