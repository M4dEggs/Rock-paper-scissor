let userscore = 0;
let computerscore = 0;

const userscore_span = document.getElementById("user-score");
const computerscore_span = document.getElementById("computer-score");

const scoreboard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

var image = document.getElementById('myImage');

function get_computerchoice(){
    const choices = ['r','p','s'];
    const random_num = Math.floor(Math.random()*3);
    return choices[random_num];
}


function convert_to_word(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissor";
}

function win(userchoice,computer_choice){
    userscore++;
    userscore_span.innerHTML = userscore;
    result_p.innerHTML = convert_to_word(userchoice) + " beats " + convert_to_word(computer_choice) + " you win";
    document.getElementById(userchoice).classList.add('green-glow');
    setTimeout(function(){ document.getElementById(userchoice).classList.remove('green-glow')},1000);
    console.log(computer_choice);
}

function lose(userchoice,computer_choice){
    computerscore++;
    computerscore_span.innerHTML = computerscore;
    result_p.innerHTML = convert_to_word(computer_choice) + " beats " + convert_to_word(userchoice) + " you lost";
    document.getElementById(userchoice).classList.add('red-glow');
    setTimeout(function(){ document.getElementById(userchoice).classList.remove('red-glow')},1000);
    console.log(computer_choice);
}

function draw(userchoice,computer_choice){
    result_p.innerHTML = convert_to_word(userchoice) + " ties with  " + convert_to_word(computer_choice) + " its a draw";
    document.getElementById(userchoice).classList.add('blue-glow');
    setTimeout(function(){ document.getElementById(userchoice).classList.remove('blue-glow')},1000);
}


function game(userchoice){
    const computer_choice = get_computerchoice();
    switch (userchoice + computer_choice ){
        case "rs":
        case "pr":
        case "sp":
            win(userchoice,computer_choice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userchoice,computer_choice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userchoice,computer_choice);
            break;
    }
}


function main() {
    rock_div.addEventListener('click', function(){
        var img = document.getElementById("default-hand");
        img.src = 'images/rock.png'; 
 
        game("r");

    })
    paper_div.addEventListener('click', function(){
        var img = document.getElementById("default-hand");
        img.src = 'images/paper.png';
        game("p");
        
    })
    scissor_div.addEventListener('click', function(){
        var img = document.getElementById("default-hand");
        img.src = 'images/scissor.png';

        game("s");
        
    })
}

main();