// let checktime = new Date();
// let yearme = checktime.getFullYear();
// let monthme = checktime.getMonth()+1;
// let dateme = checktime.getDate();
// console.log(dateme + '/' + monthme + '/' + yearme);

// const checktime = new Date();
// console.log(checktime.toLocaleDateString('es-AU'));
// console.log(checktime.toString());

// let checkfirst = new Date();
// doSomethingForALongTime();
// let checklast = new Date();
// let checkres=(checkfirst.getTime - checklast.getTime);
// console.log(checkres);

let datetime = new Date();
let bb = datetime.getHours();
let cc = datetime.getMinutes();
let dd = datetime.getSeconds();
// console.log(`${bb}:${cc}:${dd}`);
setInterval(() => {
    return `${bb}:${cc}:${dd}`
}, 1000);
