// function doSomething() {
//     for (var i =0; i < 5; i++){
//     console.log(i);
//     }
//     console.log('Finally: ' + i);
// }
// doSomething;
// var count = 5;
// count = 'a';
// 
// let log = function pesan() {
//     console.log(pesan);
// }
// let doLog=(pesan)=>{
//     console.log(pesan);
// }
// let doLog1=(pesan)=>console.log(pesan);
// interface Pointku{
//    a:number;
//    b:number; 
interface Pointku1{
    a:number;
    b:number; 
 
 
     draw(){
        console.log('x' + this.a + ',Y'+this.b);
     }
 
     getDistance(another:Pointku){
         //..
    }
}

let coins:Pointku1
coins.draw();