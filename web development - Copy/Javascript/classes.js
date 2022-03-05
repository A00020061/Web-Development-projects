// class User {
//     constructor(firstname, lastname, age, middlename) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.age = age;
//         this.middlename = middlename;

//     }
//     courselist = [];
//     getfullname() {
//         // let fullname =  `${this.firstname} ${this.lastname} is my full name.`;
//         let myname = `${this.firstname} ${this.middlename} ${this.lastname} is my complete name.`;
//         // return fullname;
//         return myname;
//     }
//     getsalary() {
//         return 'i am getting $55000/per year!';
//     }
//     addcourselist(name) {
//         this.courselist.push(name);
//     }
//     getcouselist() {
//         return this.courselist;
//     }
//     login() {
//         return 'you are logged in';
//     }
// }
// class Score {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;

//     }
//     getinformation() {
//         return 'Hey, i am your subadmin!'
//     }
//     completedetail() {
//         return `${this.name} got his ${this.email} from SA Pathology side.`
//     }
// }
// const sandy = new User('Sandeep', 'Kumar', 26, 'developer');
// const tom = new Score('Ankit', 'ankitkumar4405@gmail.com');
// sandy.addcourselist(['javascript', 'python']);
// console.log(sandy);
// console.log(tom);
// console.log(tom.completedetail());

// // console.log(sandy.getfullname());
// // console.log(sandy.getsalary());
// // console.log(sandy.getcouselist());
// // console.log(sandy.login());
// // console.log(tom.getinformation());
// // console.log(tom.login());


// function myName(name){
//     return name;
// }
// let name = 'Sandeep Kumar';
// console.log(myName(name));

// const myName = function(name){
//     return `my name is ${name}`;
// }
// console.log(myName('sandeep'));

// let mySirname = (what)=>{
//     return `${what} what a score`;
// }
// console.log(mySirname('wow'));

// const whatScore = (much)=> `how much ${much} you want bro`;
// console.log(whatScore('money'));

// const Todos = [{
//     title: 'Going to buy bread',
//     isDone: true
// }, {
//     title: 'going to gym',
//     isDone: true
// },{
//     title: 'eating something now',
//     isDone: false
// },{
//     title: 'giving money',
//     isDone: true
// }];
// const Checkdone = Todos.filter((hello) => (hello.isDone === false))
// console.log(Checkdone);

// function Questionme(nums){
//     let checkme = function(n){
//         if(n%2==0){
//             return n*2
//         }else{
//             return n*3
//         }
//     }
//     let newarray = nums.map(checkme);
//     return newarray

// }
// let nums = [1,2,3,4,5]
// console.log(Questionme(nums));

// let Questionme = (nums)

// is_array = function(input){
//     if(toString.call(input)==='[object Array]'){
//         return true;
//     }
//     return false;
// }
// console.log(is_array('w3school'));
// console.log(is_array([1,2,3,4,5]));

// let copyarr = function(input){
//     return (input.slice(0,2));
// }
// console.log(copyarr([1,2,5,9,8,9,9]));

// const copyarr =(input)=>{return (input.slice(0));}
// console.log(copyarr([1,2,3,4,5,6]));

// const fixElement = function(input){
//     let a = input.indexOf('world');
//     return a
// }
// console.log(fixElement(['hello','world','what','are']));

// const figurecheck = (input,n)=>{
//     if(input == null){
//         return void 0;
//     }else if(n==null){
//         return input[0];
//     }else if(n<0){
//         return [];
//     }else{
//         return input.slice(0,n)
//     }
// }
// const figurenotcheck = (input,n)=>{
//     if(input==null){
//         return void 0;
//     }else if(n == null){
//         return input[input.length-1];
//     }else{
//         return input.slice(Math.max(input.length-n,0))
//     }
// }
// console.log(figurecheck([1,2,5,6,9,8,4,7],5));
// console.log(figurenotcheck([456,7,8,9,5,4,4456],8 ));

// const checkme = (input)=>{
//     return input.toString();
// }
// console.log(checkme(['what','are','the','advantage']));

// var is_array = function(input){
//     if(toString.call(input)==='[object Array]'){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(is_array('w3school'));
// console.log(is_array([1,2,3,4,'5',6]));

// var is_clone = function(input){
//     return input.slice(0);
// }
// console.log(is_clone([1,2,5,6,8,6,7]));
// console.log(is_clone('whatarethe'));

// let getEle = function(input,n){
//     if(input==null){
//         return void 0;
//     }else if(n==null){
//         return input[input.length-1];
//     }else{
//         return input.slice(Math.max(input.length-n,0));
//     }
// }
// console.log(getEle([1,2,3,4,5,6]));
// console.log(getEle([],5));
// console.log(getEle([1,5,8,6,9,4],4));

// let arr = ['green','blue','white','yellow']
// let arr1 = arr.join(',');
// console.log(arr1);

// const str = 125474456326;
// const result = [str[0]];
// for(let i=1; i<str.length; i++){
//     if((str[i-1]%2 ===0) && (str[i]%2 ===0)){
//         return result.push('-',str[i]);
//     }else{
//         return result.push(str[i]);
//     }
// }
// console.log(result.join(''));
// let num = ['5','s','a','e','6','d','s','s','s','s'];
// let mx = 1;
// let low = 0;
// let result;
// for(let i=0; i<num.length; i++){
//     for( let j=i; j<num.length; j++){
//         if(num[i]==num[j]){
//             low++;
//             if(mx<low){
//                 mx=low;
//                 result = num[i];
//             }
//         }
//     }
//     low=0;
// }
// console.log(result +' with '+ mx +' Times');

// let a = ['hello world how are you and what are you doing in this world','what the hell bro'];
// console.log(a.reverse());
// const employees= [{
//     name: 'Sandeep Kumar',
//     Id: 307477,
//     Role: 'admin'
// },{
//     name: 'Ankit kumar',
//     Id: 307478,
//     Role: 'supervisor'
// },{
//     name: 'Rahul sharma',
//     Id: 307479,
//     Role: 'Management'
// }];
// function searchlist(arr, qurary){
//     function check(element){
//         return element.toLowerCase().indexOf(qurary.toLowerCase()!==-1)
//     }
//     return arr.filter(check);
// const marks = [12,45,65,25,1,56,02,.2,65,98,78];
// function ration(element){
//     return element*element;
// }
// let res = marks.map(ration);
// console.log(res);


function employees(){
    this.name = 'sandeep kumar'
    this.id = 307477;
    this.role = 'admin'
    this.pay = '$25000'
};
employees.prototype.day = 'thursday';
const check = new employees();
employees.prototype = {day: 'friday'}
const check1 = new employees()
console.log(check.day);
console.log(check1.day)


// function employees(name,id,role,pay){
//     this.name = name
//     this.id = id
//     this.role = role
//     this.pay = pay
// };
// const check = new employees('sandeep kumar', 23256, 'admin', '$20000');
// console.log(check.id);