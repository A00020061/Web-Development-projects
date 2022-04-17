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
// var hapnum = function (n, counter = 0) {
//     result = false;
//     if (counter < 8) {
//         let num = n.toString().split('').map(x => Math.pow(x, 2));
//         let numaddition = num.reduce((a, b) => a + b, 0);
//         if (numaddition=== 1) {
//             return result = true
//         } else {
//             counter++
//             hapnum(numaddition, counter)
//         }
//     }
//     return result;

// }
// let mark = hapnum(2);
// console.log(mark);


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

// -----------------------------------
// Check if One String Swap Can Make Strings Equal
// --------------------------------------

// var check = function(s1,s2){
//     result = false
//     if(s1.length===s2.length){
//         if(s1[0]===s2[s2.length-1] && s1[s1.length-1]===s2[0]){
//             return result = true;
//         }else if(s1===s2){
//             return result = true;
//         }
//     }
//     return result;
// }
// let bb = check('bank', 'bankk');
// console.log(bb);
// ----------------------------------
// Check if One String Swap Can Make Strings Equal-end
// -----------------------------------------------

// function reversest(str){
//     return str.split('').reverse().join('');
// }
// let aa = reversest('hello')
// console.log(aa);
// let aa = function(str){
//     let bb = '';
//     for(let i=str.length-1; i>=0; i--){
//         bb += str[i]
//     }return bb;
// }
// let cc = aa('hello');
// let dd = typeof(cc);
// console.log(dd );
// ---------------------------------

// let curr = new ListNode();
// let dummy  = curr;
// while (list1 && list2){
//     if(list1.val<list2.val){
//         curr.next = list1;
//         list1 = list1.next;
//     }else{
//         curr.next = list2;
//         list2 = list2.next;
//     }
//     curr = curr.next
// }
// if(list1){
//     curr.next = list1;
// }
// if(list2){
//     curr.next = list2;
// }
// return dummy.next;
// };
// ----------------------------------
// class Node{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.length= 0;
//     }
//     insert(value){
//         this.length++;
//         let newnode = new Node(value)
//     }
// }
// let newnode =new Node(['hello']);
// console.log(newnode);
// -------------------------------

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Linkedlist{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    insertFirst(value){
        this.head = new Node(value,this.head)
    }
}
let li = new Linkedlist();
li.insertFirst(112);
console.log(li);

