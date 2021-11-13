var users = document.getElementById("user-forecast");
var com = document.getElementById("com-forecast");
var scorespan = document.getElementById("score");
var score = 3;
var userNum, comNum;

function MyUserForecastCreated(){
    userNum = 0;
    while(userNum <= 0){
        userNum = Math.round(Math.random() * 5);
    }
    switch(userNum){
        case 1: users.style.backgroundImage = "url(img1.png)" 
        break;
        case 2: users.style.backgroundImage = "url(img2.png)" 
        break;
        case 3: users.style.backgroundImage = "url(img3.png)" 
        break;
        case 4: users.style.backgroundImage = "url(img4.png)" 
        break;
        case 5: users.style.backgroundImage = "url(img5.png)" 
        break;
    }
}

function ComForecastCreated(){
    comNum = 0;
    while(comNum <= 0){
        comNum = Math.round(Math.random() * 5);
    }
    switch(comNum){
        case 1: com.style.backgroundImage = "url(img1.png)" 
        break;
        case 2: com.style.backgroundImage = "url(img2.png)" 
        break;
        case 3: com.style.backgroundImage = "url(img3.png)" 
        break;
        case 4: com.style.backgroundImage = "url(img4.png)" 
        break;
        case 5: com.style.backgroundImage = "url(img5.png)" 
        break;
    }

    if(comNum < userNum){
        score++;
        scorespan.innerHTML = "Score :" + score

    }
    else if(comNum > userNum){
        score--;
        scorespan.innerHTML = "Score :" + score;
        if(score <= 0){
            alert("Sorry,You lost!!!")
        }
    }
}
