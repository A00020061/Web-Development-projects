// function marksgrade() {
//     let value = prompt('what is your math score','50')
//     if (document.form1.text1.value>50){
//         console.log('marks is greater than 50.');

//     }
//     else{

//         console.log('marks is less than or equal to 50.');
//     }
// }
// var age = 25;
// var aged = age>18? 'you can register on google' : 'you can not register on google';
// var num1,num2;
// num1 = window.prompt('what is the first number', '0');
// num2 = window.prompt('what is the second number', '0');
// if(parseInt(num1,10)>parseInt(num2,10)){
//     console.log('The larger of '+ num1+ 'and '+ num2+ 'is '+ num1+ '.');

// }else if(parseInt(num2,10)>parseInt(num1,10)){
//     console.log('The larger of '+ num1+ ' and ' + num2+ ' is '+ num2+ '.');
// }else{
//     console.log('The larger of '+ num1+ ' and' + num2+ ' are equal.');
// }

// function myFunction(){
//     var a = new Date()

//     document.getElementById("demo").innerHTML = a}

// console.log("Hello Sandeep Kumar");
// let a = window;
// // a = prompt('Are you sure for that!');
// // alert('Your system has been hacked by malicious users')
// // a = cocnfirm('If you want to buy the house, please send ')
// a = location.reload;
// // console.log(a);
// function myFun(paravalue) {
//     var backup = document.body.innerHTML;
//     var printtitle = document.getElementById(paravalue).innerHTML;
//     document.body.innerHTML = printtitle;
//     window.print();
//     document.body.innerHTML = backup;
// }
// function myFunction() {
//     var filter = document.getElementById('giveinput').value.toUpperCase();
//     var unorderlist = document.getElementById('myMenu');
//     var mylist = unorderlist.getElementsByTagName('li');
//     var found = 'No result found';
//     for (i = 0; i < mylist.length; i++) {
//         var mylista = mylist[i].getElementsByTagName('a')[0];
//         var myoutput = mylista.textContent;
//         if (myoutput.toUpperCase().indexOf(filter) > -1) {
//             mylist[i].style.display = '';
//         } else {
//             mylist[i].style.display = 'none';
//             // document.getElementById('not found').style.display = 'block';
//         }
//     }
// }

// document.getElementById('head2').setAttribute('style', 'color: white; background-color: yellow; font-size: 2rem;');
// document.getElementById('head6').setAttribute('style','color:pink; font-size: 2rem;');
// document.getElementById('giveinput').setAttribute('style','padding: .5rem; width: 10rem');

var n = 2;
function multipleFun (num){
    var ans = num * num;
    return ans;
var square2 = multipleFun(n);
}