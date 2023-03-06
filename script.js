var time= prompt("what is the time: ");
if(time > 5 && time < 12){
    alert("good Morning");
}
else if( time > 12 && time < 17){
    alert("good afternoon");
}
else if(time >17 && time < 21){
    alert("good evening");
}
else{
    alert("good night");
}