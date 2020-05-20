var play_button;
var removals;
var start_image;
var game_area;
var info;
var alphabets = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var sentence = 'MASAI'
var length = sentence.length
var alphabets_holder;
var control
var page
var word
var turns
var answerArray = []
var guess_sentence = ""
var lifes = 10

function start_game(){
    removals = document.querySelectorAll('button, img')
    console.log(removals)
    for (var i= 0; i< removals.length; i++){
        removals[i].remove()
    }

    // create
    start_image = document.createElement('img')
    info = document.createElement('p')
    word = document.createElement('p')
    alphabets_holder = document.createElement('div')
    show = document.createElement('button')
    
    // append required value
    info.textContent = "find the matching word"
    start_image.src = 'resources/start.png'
    game_area.append(start_image, info)
    for (var j = 0; j < 26; j++ ){
        show = document.createElement('button')
        show.setAttribute('id', 'alpha_button_' + j)
        show.setAttribute('onclick', 'alpha(' + j + ')')
        show.textContent = alphabets[j]
        control.append(show)
    }
    for (var i = 0; i < length; i++){
        guess_sentence = guess_sentence + '-';
        write_sentence()
    }
}

function write_sentence(){
    document.getElementById('board').innerHTML = guess_sentence;
}

String.prototype.set_sign = function(place, char){
    return this.substr(0, place) + char + this.substr(place + 1);
}

function alpha(num){

    var check_click = false;

    for (i = 0; i < length; i++){
        if (sentence.charAt(i) == alphabets[num]){
            guess_sentence = guess_sentence.set_sign(i, alphabets[num])
            check_click = true;
        }
    }
    if (check_click === true){
        write_sentence()
    }
    else{
        lifes--
        document.getElementById('life_count').innerHTML = "your remaing lifes: " + lifes;
    }

    if (sentence == guess_sentence){
        document.getElementById('controller_section').innerHTML = "You've won"
        start_image.src = 'resources/won_image.png'
    }

    else if (lifes == 0){
        document.getElementById('controller_section').innerHTML = "You've lost correct sentence: " + sentence;
        document.getElementById('life_count').innerHTML = ''
        start_image.src = 'resources/lost_image.jpg'
    }
}



window.addEventListener('load', function(){
    play_button = document.getElementById('start_button')
    control = document.getElementById('controller_section')
    game_area = document.getElementById('game_box')
    page = document.querySelector('body')
    play_button.addEventListener('click', start_game)
})
