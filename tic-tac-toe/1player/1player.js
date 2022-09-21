///////////
let button = document.getElementsByClassName("tic_tac_toe");
let b1=document.querySelector("#b1")
let b2=document.querySelector("#b2")
let b3=document.querySelector("#b3")
let b4=document.querySelector("#b4")
let b5=document.querySelector("#b5")
let b6=document.querySelector("#b6")
let b7=document.querySelector("#b7")
let b8=document.querySelector("#b8")
let b9=document.querySelector("#b9")
let computer="O"
let computerMove;
let player="X"
let flag=true;
let t=0;
///////////////////////////
myFunction();
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
/////////////////////////////
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
    }if(flag==false){
      computerEasyModeMove();
      let final=checkresult();
      if(final=="stop" ){
          result=document.getElementById("result");
          result.innerHTML='WIN O'; 
          console.log(result.innerHTML);
          alert("WIN O");
          location.reload();
      }
       
  }
  }

  function computerEasyModeMove(){

    for(let i=1 ;i<10;i++){
      let computerMove = Math.floor(Math.random() * 8)+1 ;
      console.log(computerMove)
      if(computerMove==1 && ( b1.disabled == false )){
      b1.innerHTML='O';
      b1.style.backgroundColor="#5F3C86";
      b1.disabled=true  ;
      flag=true;
      break;
      }
      else if(computerMove== 2 && (b2.disabled == false )){
        b2.innerHTML='O';
        b2.style.backgroundColor="#5F3C86";
        b2.disabled=true;
        flag=true;
        break;
        }
       else if(computerMove== 3 && (b3.disabled == false )){
        
          b3.innerHTML='O';
          b3.style.backgroundColor="#5F3C86";
          b3.disabled=true;
          flag=true;
          break;
        }
        else if(computerMove== 4 && (b4.disabled == false )){
        
        b4.innerHTML='O';
        b4.style.backgroundColor="#5F3C86";
        b4.disabled=true;
        flag=true;
        break;
      }
      else if(computerMove== 5 && (b5.disabled == false)){
      
        b5.innerHTML='O';
        b5.style.backgroundColor="#5F3C86";
        b5.disabled=true;
        flag=true;
        break;
      }
      else if(computerMove== 6 && (b6.disabled == false )){
        b6.innerHTML='O';
        b6.style.backgroundColor="#5F3C86";
        b6.disabled=true
        flag=true;
        break;
      }
      else if(computerMove== 7 && (b7.disabled == false )){
      b7.innerHTML='O';  
      b7.style.backgroundColor="#5F3C86";
      b7.disabled=true;
      flag=true;
      break;
        
      }
      else if(computerMove== 8 && (b8.disabled == false )){
      b8.innerHTML='O'; 
      b8.style.backgroundColor="#5F3C86";
      b8.disabled=true;
      flag=true;
      break;
      }
      else  if(computerMove== 9 && (b9.disabled == false )){
        b9.innerHTML='O';
        b9.style.backgroundColor="#5F3C86";
        b9.disabled=true;
        flag=true;
        break;

      }
    }
  }

////////////////////////////
function Replay(){
  b1.innerHTML='';
  b1.style.backgroundColor="#ffffff";
  b1.disabled=false
  b2.innerHTML='';
  b2.style.backgroundColor="#ffffff";
  b2.disabled=false
  b3.innerHTML='';
  b3.style.backgroundColor="#ffffff";
  b3.disabled=false
  b4.innerHTML='';
  b4.style.backgroundColor="#ffffff";
  b4.disabled=false
  b5.innerHTML='';
  b5.style.backgroundColor="#ffffff";
  b5.disabled=false
  b6.innerHTML='';
  b6.style.backgroundColor="#ffffff";
  b6.disabled=false
  b7.innerHTML='';
  b7.style.backgroundColor="#ffffff";
  b7.disabled=false
  b8.innerHTML='';
  b8.style.backgroundColor="#ffffff";
  b8.disabled=false
  b9.innerHTML='';
  b9.style.backgroundColor="#ffffff";
  b9.disabled=false
}
///////////////////////
function checkresult(){
        let str;
    if((document.getElementById("b1").innerHTML==document.getElementById("b5").innerHTML)
        && ( document.getElementById("b1").innerHTML==document.getElementById("b9").innerHTML)
        && (document.getElementById("b1").innerHTML=="X") || (document.getElementById("b1").innerHTML=="O")){
        str="stop"
        return str
    }
    else if((document.getElementById("b3").innerHTML==document.getElementById("b5").innerHTML
        &&  document.getElementById("b3").innerHTML==document.getElementById("b7").innerHTML)
        && ((document.getElementById("b3").innerHTML=="X") || (document.getElementById("b3").innerHTML=="O"))){
        str="stop"
        return str
    }
    else if((document.getElementById("b1").innerHTML==document.getElementById("b2").innerHTML
        &&  document.getElementById("b1").innerHTML==document.getElementById("b3").innerHTML)
        && ((document.getElementById("b1").innerHTML=="X") || (document.getElementById("b1").innerHTML=="O"))){
        str="stop"
        return str
    }
    else if((document.getElementById("b4").innerHTML==document.getElementById("b5").innerHTML 
        &&  document.getElementById("b4").innerHTML==document.getElementById("b6").innerHTML)
        && ((document.getElementById("b4").innerHTML=="X") || (document.getElementById("b4").innerHTML=="O"))){
        str="stop"
        return str
    }
    else if((document.getElementById("b7").innerHTML==document.getElementById("b8").innerHTML 
        &&  document.getElementById("b7").innerHTML==document.getElementById("b9").innerHTML)
        && ((document.getElementById("b7").innerHTML=="X") || (document.getElementById("b7").innerHTML=="O"))){
        str="stop"
        return str
    }
    else if((document.getElementById("b1").innerHTML==document.getElementById("b4").innerHTML
        &&  document.getElementById("b1").innerHTML==document.getElementById("b7").innerHTML)
        && ((document.getElementById("b1").innerHTML=="X") || (document.getElementById("b1").innerHTML=="O"))){
        str="stop"
        return str
    }
    else if((document.getElementById("b2").innerHTML==document.getElementById("b5").innerHTML 
        &&  document.getElementById("b2").innerHTML==document.getElementById("b8").innerHTML)
        && ((document.getElementById("b2").innerHTML=="X") || (document.getElementById("b2").innerHTML=="O"))){
        str="stop"
        return str
    }
    else if((document.getElementById("b3").innerHTML==document.getElementById("b6").innerHTML 
        &&  document.getElementById("b3").innerHTML==document.getElementById("b9").innerHTML)
        && ((document.getElementById("b3").innerHTML=="X") || (document.getElementById("b3").innerHTML=="O"))){
        str="stop"
        return str
    }
}
