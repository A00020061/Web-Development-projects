// let marks = function(arr, target){
//     let start = 0;
//     let end = arr.length -1;
//     let pos = [-1,-1];
//     while(start<=end){
//         let mid = Math.floor(start + end)/2;
//         if(arr[mid]>target){
//             //keep continue to left side
//             end=mid-1;
//         }else if(arr[mid]===target){
//             pos[0]=mid
//             end = mid -1
//         }else{
//             start = mid +1;
//         }
//     };
//     start = 0;
//     end = arr.length-1;
//     while(start<=end){
//         let mid = Math.floor(start + end)/2;
//         //keep continue to right side
//         if(arr[mid]===target){
//             pos[1]=mid
//             start = mid+1;
//         }else if(arr[mid]>target){
//             end = mid-1;
//         }else{
//             start = mid +1;
//         }
//     };
//     return pos;


// };
// let score = marks([1,3,5,7,9,11,13,15], 9);
// console.log(score);

// const work = function(num,target){
//     let head = 0;
//     let tail = num.length - 1;
//     while (head<=tail){
//         let mid = head + Math.floor(tail - head)/2;
//         if(num[mid]===target){
//             return mid;
//         }else if(num[mid]>target){
//             tail = mid - 1;
//         }else{
//             head = mid + 1;
//         }
//     }
//     return head;
// }
// let aaa = work([1,2,4,5,6,7,8], 0);
// console.log(aaa);

// -------------------
// do somthing different
// --------------------

// let check = function(num){
//     let box = []
//     for(let i = 0; i<num.length; i++){
//         let jjj = num[i]*num[i];
//         box.push(jjj);
//     }
//     return box.sort(function(a,b){return (a-b)});
// };
// let www = check([-4,-1,0,1,3,5]);
// console.log(www);
// -------------------
// do somthing different
// --------------------
// const score = function(arr,k){
//     if(arr.length>k){
//         arr.unshift(...arr.splice(-k));
//     }else{
//         let i = 0;
//         while(i<k){
//             arr.unshift(...arr.splice(-1));
//             i++
//         }
//     }
//     return arr;
// }
// let mark = score([1,2,3,4,5],6);
// console.log(mark);

// -------------------
// do somthing different
// --------------------

// let score = function(nums){
//     for(let i = 0; i<nums.length; i++){
//         if(nums[i]===0){
//             nums.splice(i,1);
//             nums.push(0);
//         }
//     }return nums
// }
// let mark = score([0,0,1]);
// console.log(mark);
// ------------------------
