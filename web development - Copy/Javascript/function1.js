// function myName(){
//     console.log('hellow world');
// }
// myName();

// var mathscore = 80;
// var englishscore = 185;
// var historyscore = 75;
// var geographyscore = 70;
// parseFloat
// function mathCalculation(){
//     var totalCheck = parseFloat(mathscore) + parseFloat(englishscore) + parseFloat(historyscore) + parseFloat(geographyscore);
//     var averageCheck = totalCheck/4;
//     if(averageCheck>90){
//         console.log(`Sandeep kumar this is your grade ${averageCheck}`);
//     }else if(75<averageCheck<90){
//         console.log('Sandeep, You got a A grade with average score is + averageCheck +');
//     }else{
//         console.log('Sandeep, You got a B grade');
//     }

//     return averageCheck;
//     return totalCheck;
// }
// let what = mathCalculation();
// console.log(what);

// function karTotal(firstNumberr, firstDecimall, firstStringg){
//     console.log(firstNumber + Number(firstNumberr));
//     console.log(firstString  +' '+  firstStringg);
//     console.log(Number(firstDecimal)+ Number(firstDecimall));


// }
// firstNumberr = 20;
// firstStringg = 'Parjapat'
// firstDecimall = 20.22;
// karTotal(firstNumberr, firstDecimall, firstStringg);


// function thapaTechnical(s){
//     const resultt = 'aeiou';
//     let resultt2 = '';
//     for(i=0; i<s.length; i++){
//         if(resultt.includes(s[i])){
//             console.log(s[i]);
//         }else{
//             resultt2 += s[i] + '\n'; 
//         }
//     }
//     for(j=0; j<resultt2.length; j++){
//         console.log(resultt2[j]);
//     }
//     // console.log(resultt2.trim());
// }
// var s = 'javascript';
// thapaTechnical(s);

// function thapaTechnical(s){
//     const myvowel = 'aeiou';
//     for(let i=0; i<s.length; i++){
//         let mylength = s.length;
//         let ss = 
//         if(s[0]==)
//     }
// }
// function check(s){
//     let ss = s.length;
//     let vowelmy = 'aeiou';
//     if(s[0]==vowelmy.includes()){
//         console.log('we are the winner!');
//     }else{
//         console.log('we are not the winner!');
//         // console.log(s[0]);
//         // console.log(s[ss-1]);
//         // console.log(ss);
//     }

// }
// let s = 'javascript';
// check(s);

// function getArea(length,width){

//     return (length*width);S
// }
// let length = 10;
// let width = 25;
// console.log(getArea(length,width)); 

// function fraction(n){
//     let result = 1;
//     for (let i=n; i>0;  i--){
//         result *= i
//         }
//     return result

// }
// let n = 15;
// console.log(fraction(n));
// function mySolution(a){
//     let emptylist = [];
//     for(let i = 0; i<a.length; i++){
//         if(emptylist.indexOf(a[i])===-1){
//             emptylist.push(a[i]);
//         }
//     }
//     return Set(emptylist);

// }

// let a = [1,2,5,2,6,8,1,3];
// console.log(mySolution(a));

// let a = [1,2,5,9,7,2,1,5,3,6,2,8,9,7,5,1,2,3];
// // let b = [...new Set(a)];
// let emptylist = a.sort((a,b)=> a-b);
// console.log(emptylist);

// function getMyNumber(num){
//     let largest = [];
//     let secondLargest = [];
//     for(let i = 0; i<num.length; i++){
//         if(num[i]>largest){
//             secondLargest = largest;
//             largest = num[i];
//             continue;
//         }
//         if((num[i]>secondLargest)&&(num[i]<largest)){
//             secondLargest = num[i];
//         }
//     }
//     return secondLargest;
// }
// let num = [20,30,15,45,55,12,85,85,45];s
// console.log(getMyNumber(num));
// let num1 = [...new Set(num)].sort((a,b)=> a-b);
// console.log(num1);

//    try, catch, and finally statement we are going to discuss in this example

// function Tryme(num){
//     // let num =prompt('what is your input');
//     try{
//         if(num>20) throw 'This is a high Number!';
//         if(num<5) throw 'This is a low Number!';
//         if(isNaN(num)) throw 'This is not a Number';
//         if(num == '') throw 'This is an empty list';
//     }
//     catch(err){
//         console.log('Result is ' + err);
//     }
//     finally{
//         console.log(num);
//     }
// }
// let num = 16;
// Tryme(num);


// let a = 'howareyoubro'
// console.log(a.length);
// console.log(a[11]);

// function reverseString(s){
//     let correctString = '';
//     for(let i=(s.length)-1; i--){
//         try{
//             if(i >=0){
//                 correctString += s
//             }
//         }
//     }
// }
// let a = 'helloworldwhatareyoudoiong'
// let b = a.split('');
// let c = b.reverse();
// let d = c.join();
// console.log(d);

// function reverseString(s){
//     try{
//         a = s.split('').reverse().join(''); 
//     }
//     catch(r){
//         console.log('we got an error!');
//     }
//     finally{
//         console.log(a);
//     }
// }
// let s = 'hellowowrld';
// reverseString(s);

// function findMe(a) {
//     if (a > 0) {
//         return 'YES';
//     } else if {
//         throw (a === 0 ? new Error('Zero Error'));
//     }else if{
//         throw(a<0 ? new Error('Negative Error'));
//     }else{
//         console.log('Invalid input');
//     }
// }
// let a = 0;
// findMe(a);
// let one = "hello world";
// let result = one.toString();
// console.log(result);
// console.log(one);

// const person = {
//     fullName: function(city, country){
//         return this.firstname + ' ' + this.lastname + ',' + city  + ',' + country;
//     }
// }
// const person1 = {
//     firstname: 'john',
//     lastname: 'kumar'
// }
// const person2 = {
//     firstname:'rahul',
//     lastname:'sharma'
// }
// console.log(person.fullName.call(person1, 'Pehowa','India'));

// const checkme =(input)=>{
//     if(toString.call(input)==='[object Array]'){
//         return true;
//     }
//     return false;   
// }
// console.log(checkme([1,2,3,4,5,6]));

// const checkme = (input)=>{
//     return input.slice(0);
// }
// console.log(checkme([1,2,5,6,9,8,4]));

// const arraycheck = function(input,n){
//     if(input==[]){
//         return void 0;
//     }else if (n==0){
//         return input[0];
//     }else if(n<0){
//         return [];
//     }else{
//         return input.slice(0,n);
//     }
// }
// console.log(arraycheck([],-5));

// const arraycheck = function(input,n){
//     if(input==null){
//         return void 0;
//     }else if(n==null){
//         return input[input.lenght-1];
//     }else{
//         return input.slice(Math.max(input.length-n,0));
//     }
// }
// console.log(arraycheck([7,5,8,6,2,1,4,5,6,9,5,4,6,4],6));

// const checkme = ['hello','world','how','are','you'];
// const a = checkme.join(',+');
// const b = checkme.toString();
// console.log(a);
// console.log(b);

