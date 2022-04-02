var player1name=localStorage.getItem("p1");
var player2name=localStorage.getItem("p2");
var player1score=0;
var player2score=0;
document.getElementById("player1name").innerHTML=player1name+" : ";
document.getElementById("player2name").innerHTML=player2name+" : ";
document.getElementById("player1score").innerHTML=player1score;
document.getElementById("player2score").innerHTML=player2score;
document.getElementById("playerquestion").innerHTML="Question Turn - "+player1name;
document.getElementById("playeranswer").innerHTML="Answer Turn - "+player2name;
var actualanswer=0;
function send(){
    var number1=document.getElementById("number1").value;
    var number2=document.getElementById("number2").value;
    actualanswer=parseInt(number1)*parseInt(number2);

    var question_number="<h4> "+number1+" X "+number2+"</h4>";
    var input_box="<br>Answer : <input type='text' id='input_answer'>";
    var check_button="<br> <button class='btn btn-info' onclick='check()'>Check</button>";
    var row=question_number+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}
 var question_turn="player1";
 var answer_turn="player2";
 function check(){
     var get_answer=document.getElementById("input_answer").value;
     if(get_answer==actualanswer){
         if(answer_turn=="player1"){
             player1score=player1score+1;
             document.getElementById("player1score").innerHTML=player1score;
         }
         else{
             player2score=player2score+1;
             document.getElementById("player2score").innerHTML=player2score;
         }
     }
     if(question_turn=="player1"){
         question_turn="player2";
         document.getElementById("playerquestion").innerHTML="Question Turn - "+player2name;
     }
     else{
         question_turn="player1";
         document.getElementById("playerquestion").innerHTML="Question Turn - "+player1name;
     }
     if(answer_turn=="player1"){
        answer_turn="player2";
        document.getElementById("playeranswer").innerHTML="Answer Turn - "+player2name;
    }
    else{
        answer_turn="player1";
        document.getElementById("playeranswer").innerHTML="Answer Turn - "+player1name;
    }
    document.getElementById("output").innerHTML="";
 }