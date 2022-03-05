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

// const student = {              //object literal 
//     Name: 'Rahul Sharma',
//     Age: 25,
//     Course: 'IT',
//     Year: 'Final',
//     Intenship: 'No',
//     get getname(){
//         return this.Name;
//     }
// };
// console.log(student.getname);


// function Person(){    //construction object
//     this.Name = 'Sandeep Kumar',
//     this.Course = 'IT',
//     this.Age = 25,
//     this.Year = 'Final',
    
// };
// const student = new Person();
// console.log(Person.getName);


// function Person(Name, Age, Course, Year, Fees){
//     this.name = Name,
//     this.age = Age,
//     this.course = Course,
//     this.year = Year,
//     this.fees = Fees
// }
// const student = new Person('Sandeep kumar', 25, 'IT', 'Final', '$25000')
// const student1 = new Person('Ankit Sharma', 24, 'Business', 'Final', '$30000')
// Person.prototype = {fees:$32000}
// console.log(student.fees);
// console.log(student1.fees)


const Sandeep_kumar = {
    _Available_meeting_time: [11,2,5],
    Accepted_purpose: 'any',
    Pending_meeting:[],
    Accepted_meeting:[],
    Decline_meeting:[],
    _feedback: '',

    get getmeeting_time(){
        return this._Available_meeting_time;
    },
    get getfeedBack(){
        return this._feedback;
    },
    // set setmeeting_time(time){
    //     if(this._Available_meeting_time.indexOf(time)!==-1){
    //         this.Pending_meeting.push(time);
    //         this._feedback = 'Your Appointment has been recorded and will be reviewed by the Sandeep-kumar';
    //     }else{
    //         this._feedback='Your Appointment has been cancelled'
    //     }
    // }
    // set setmeeting_time(meeting){
    //     const{name,time,purpose} = meeting;
    //     if(this._Available_meeting_time.indexOf(time)!==-1 && this.Accepted_purpose ==='any'){
    //         this.Pending_meeting.push(time);
    //         this._feedback = 'Your Appointment has been booked and would be called to you soon';
    //     }else if(this.Accepted_meeting === purpose.toLowerCase()){
    //         this.Pending_meeting.push(time);
    //         this._feedback = `you appointment time has been recorded and will call you back`;
    //     }else{
    //         this._feedback = `Sorry, we can't take move with you appointment time.`
    //     }
    // }
};
// const newClientmeeting = {name: 'ankit', time: 12, purpose: 'fun'};
// Sandeep_kumar.setmeeting_time = newClientmeeting;
// console.log(Sandeep_kumar._feedback);
// Sandeep_kumar.setmeeting_time = 13;
// console.log(Sandeep_kumar._feedback);