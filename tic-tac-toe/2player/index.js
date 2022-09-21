
let button = document.getElementsByClassName("tic_tac_toe");
let b1=document.querySelector("#b1");
let b2=document.querySelector("#b2");
let b3=document.querySelector("#b3");
let b4=document.querySelector("#b4");
let b5=document.querySelector("#b5");
let b6=document.querySelector("#b6");
let b7=document.querySelector("#b7");
let b8=document.querySelector("#b8");
let b9=document.querySelector("#b9");
let p1=document.querySelector("#p1");
let p2=document.querySelector("#p2");

let flag=true;
myFunction();
myFunction2();
///////////////////////name1:X
function myFunction() {
  let text;
  let name = prompt("Enter your name for X:");
 if (name == null || name == "") {
    text = "Player1:X";
  } else {
    text =   name + ":X";
  }
  document.getElementById("p1").innerHTML = text;
  return name;
}
///////////////////////name1:O
function myFunction2() {
    let text;
    let name = prompt("Enter your name for O:");
    if (name == null || name == "") {
        text = "Player2:O";
      } else {
        text =   name + ":O";
      }
    document.getElementById("p2").innerHTML = text;
    return name;
  }
//////////////////////////////
function game(){
        if (flag==true){
        let l1=document.activeElement;
        console.log(l1);
        l1.innerHTML="X";
        l1.style.backgroundColor='#4997A8';
        l1.disabled=true;
        console.log(l1.disabled);
        console.log(l1.id);
        flag=false;
    
        let final=checkresult();
            if(final=="stop"){
                result=document.getElementById("result");
                result.innerHTML='WINS X'; 
                console.log(result.innerHTML);
                alert("WIN X");
                location.reload();
                }
            }
else if(flag==false){
    l2=document.activeElement
    l2.innerHTML="O";
    l2.style.backgroundColor="#5F3C86";
    //document.activeElement.removeAttribute("onclick");
   // t++;
   console.log(l2.id)
    flag=true;
    let final=checkresult()
    if(final=="stop"){
        result=document.getElementById("result");
        result.innerHTML='WIN O';
        console.log(result.innerHTML);
        alert("WIN O");
        location.reload();
    }
}
}
function checkresult(){
    let str;
if((document.getElementById("b1").innerHTML==document.getElementById("b5").innerHTML)
    && ( document.getElementById("b1").innerHTML==document.getElementById("b9").innerHTML)
    && (document.getElementById("b1").innerHTML=="X") || (document.getElementById("b1").innerHTML=="O")){
    str="stop"
    return str
}
else if((document.getElementById("b3").innerHTML==document.getElementById("b5").innerHTML)
    && (document.getElementById("b3").innerHTML==document.getElementById("b7").innerHTML)
    && ((document.getElementById("b3").innerHTML=="X") || (document.getElementById("b3").innerHTML=="O"))){
    str="stop"
    return str
}
else if((document.getElementById("b1").innerHTML==document.getElementById("b2").innerHTML)
    &&  (document.getElementById("b1").innerHTML==document.getElementById("b3").innerHTML)
    && ((document.getElementById("b1").innerHTML=="X") || (document.getElementById("b1").innerHTML=="O"))){
    str="stop"
    return str
}
else if((document.getElementById("b4").innerHTML==document.getElementById("b5").innerHTML )
    &&  (document.getElementById("b4").innerHTML==document.getElementById("b6").innerHTML)
    && ((document.getElementById("b4").innerHTML=="X") || (document.getElementById("b4").innerHTML=="O"))){
    str="stop"
    return str
}
else if((document.getElementById("b7").innerHTML==document.getElementById("b8").innerHTML )
    &&  (document.getElementById("b7").innerHTML==document.getElementById("b9").innerHTML)
    && ((document.getElementById("b7").innerHTML=="X") || (document.getElementById("b7").innerHTML=="O"))){
    str="stop"
    return str
}
else if((document.getElementById("b1").innerHTML==document.getElementById("b4").innerHTML)
    && ( document.getElementById("b1").innerHTML==document.getElementById("b7").innerHTML)
    && ((document.getElementById("b1").innerHTML=="X") || (document.getElementById("b1").innerHTML=="O"))){
    str="stop"
    return str
}
else if((document.getElementById("b2").innerHTML==document.getElementById("b5").innerHTML )
    && ( document.getElementById("b2").innerHTML==document.getElementById("b8").innerHTML)
    && ((document.getElementById("b2").innerHTML=="X") || (document.getElementById("b2").innerHTML=="O"))){
    str="stop"
    return str
}
else if((document.getElementById("b3").innerHTML==document.getElementById("b6").innerHTML )
    && ( document.getElementById("b3").innerHTML==document.getElementById("b9").innerHTML)
    && ((document.getElementById("b3").innerHTML=="X") || (document.getElementById("b3").innerHTML=="O"))){
    str="stop"
    return str
}
}
