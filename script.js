// var time= prompt("what is the time:" );
// if(time > 5 && time < 12){
//     alert("good Morning");
// }
// else if( time > 12 && time < 17){
//     alert("good afternoon");
// }
// else if(time >17 && time < 21){
//     alert("good evening");
// }
// else{
//     alert("good night");
// }

var fruitType= prompt("kaun sa faal chaaiye??")

switch(fruitType){
    case 'Narangi':
        console.log('Narangi hai 60rs kilo.');
        break;
    case 'sabe':
        console.log('sabe hai 180rs kilo.');
        break;
    case 'kele':
      console.log('kele hai 35rs kilo.');
       break;
     case 'Amrudh':
      console.log('Amrudh hai 80rs kilo.');
       break;
    case 'Aam':
      console.log('Aam hai 300rs kilo.');
       break;
    case 'papita':
      console.log('papita hai 200rs kilo.');
       break;
    default:
        console.log(`${fruitType} ajj khtm ho gya kal aana`)
}
console.log("orr kuch chaiye??");