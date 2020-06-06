
// if(true){
//     var name ='Kha';
// }
// alert(name);

// name ='đep trai';
// alert(` ${name}`); ---- template String

// function welcome(user,message){
//     alert(`Hello ${user} , ${message}`);
// }

// welcome('kha','chào buổi sáng'); 

// function welcome(user = 'kha' ,message ='chào buổi sáng :))'){
//     alert(`hello ${user} , ${message}`);
// }
// welcome();


// function gretting(message){
//     return alert(`${message} everyone!`);
// // }
// let gretting =(message) =>{
//     return alert(`${message} everyone !`);
// }
//     let gretting = message =>alert(`${message} everyone`);
// gretting('good morning');

// let createBlog =(title,body)=>{
//     if(!title){
//         throw new Error('A title is required');
//     }
//     if(!body){
//         throw new Error('body can`t be empty');
//     }
//     return `${title} -${body}`;
// }
// var k= createBlog('kha đẹp trai','vãi đái vãi đái');

// alert(k);


// /// this is object
// let nepal ={
//     // add property
//     mountains: ['Everest','Fish Tail','Annapurna'],
//    printWithDash: function(){
//         // console.log('inside printWithDash',this);
//         setTimeout(()=>console.log(this.mountains.join(' - ')),1000);
//     }
// }

// nepal.printWithDash();


// let thingsToDo= {
//     morning:'Exercise',
//     afternoon:'work',
//     evening :'code',
//     night:['Sleep','Dream']
// }
// ///get json
// let{morning : mn,afternoon : af}=thingsToDo;
// // alert(`${mn} , ${af}`);

// ////get array
// let[n1,n2] = thingsToDo.night;
// //alert(`${n1} , ${n2}`);



// student({
//     name :'Kha',
//     university:'Gia Định University',
// });
// let uniStudent = student =>{
    
//     alert(`${student.name} from ${student.university}`);
   
// };
// uniStudent(student);


// let uniStudent = student =>{
//     let {name,university} = student;
//     alert(`${name} from ${university}`);
// };
// uniStudent(student);

// let uniStudent = (name,university) =>{
//     //alert(`${student.name} from ${student.university}`);
//     alert(`${name} from ${university}`);
    
// };


// uniStudent(student.name,student.university);

// let [first,second,third] =['Everest','Fish Tail','Annapurna'];
// console.log(first,' - ',second,' - ',third);

// var name = 'everest';
// var height= 8848;
// var output= function(){
//     console.log(`Mt. ${this.name} is ${this.height} meter tall (by khadeptrai)`);
// };
// var adventureClimbing= {name,height,output};
// console.log(adventureClimbing);
// adventureClimbing.output();


// var adventureClimbing= {
//     name : 'everest',
//     height: 8848,
// //     output(){
// //     console.log(`Mt. ${this.name} is ${this.height} meter tall (by khadeptrai)`);
// // },
//     output: function(){
//     console.log(`Mt. ${this.name} is ${this.height} meter tall (by khadeptrai)`);
// },
// };
// // console.log(adventureClimbing);
// adventureClimbing.output();

// var mountains=['Everest','Fist Tail','Annapurna'];
// var mountainsFromJapan=['Fuji'];

// var allmountains=[...mountains,...mountainsFromJapan];

// console.log(allmountains);

// let obj = {
//     name:'Nguyễn Kha',
//     age:21,
// };

// let objNew={...obj,gender :'Nam'};

// console.log(objNew);

///spread 
// var day={
//     breakfast : 'toast with milk',
//     lunch:'rice with cicken curry',
// }

// var night= {
//     dinner : 'noodle soup',
// }

// var picnic ={
//     ...day,
//     ...night,
// }

// // console.log(picnic);

// // rest 
// var rivers=['Sunkoshi','tamakoshi','Saptakoshi'];
// var [first,...rest]=rivers;
// console.log(first);
// console.log(rest);


// ///class ES5
// function Holiday(destination,days){
//     this.destination=destination;
//     this.days=days;
// }

// Holiday.prototype.info =function(){
//     console.log(this.destination+' | '+this.days)
// }

// var nepal= new Holiday('Nepal',30);
// console.log(nepal.info());


///class ES6

// class Holiday{
//     constructor(destination,days){
//         this.destination=destination;
//         this.days=days;
//     }
//     info(){
//         console.log(this.destination+' | '+this.days);
//     }
// }
// // console.log(Holiday.prototype);

// var nepal=new Holiday('kha',21);
// nepal.info();
class Mother{
    constructor(name){
        this.name=name;
    }
    colorEyes(){
        console.log('Black');
    }
}
class Me extends Mother{
    constructor(name,age){
        super(name);
        this.age=age;
    }
    colorSkin(){
        console.log('White');
    }
}
let me=new Me('Kha',21);
console.log(me.name);
console.log(me.age);
me.colorEyes();
me.colorSkin();