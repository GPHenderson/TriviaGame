$('#start').on ('click', function(){
    game.start ();
})

$(document).on('click', '#end',function(){
    game.done();
})


var questions = [{
    question: "Which of theses is NOT a name of on of the Spice Girls?",
    answers: ["Sporty Spice", "Fred Spice", "Scary Spice", "Posh Spice"], 
    correctAnswer: "Fred Spice"
},
    {
        question: "Which NBA team won the most titles in the 90's?",
        answers: ["Bulls", "Lakers", "Celtics", "Knicks"],
        correctAnswer: "Bulls"
    },

    {
        question: "What was the first full-length CGI movie?",
        answers: ["A Bug's Life", "Monster Inc", "Toy Story", "The Lion King"],
        correctAnswer: "Toy Story"
    }
];



var game = {
    correct: 0,
    incorrect: 0, 
    counter: 20,
    questionCount: 0,
    numberQuestions: 3,
    countdown: function(){
        game.counter--;
        if(game.counter<0){
            console.log ("Time is up!");
            game.done();
        }
        $('#counter').html(game.counter);
    },
start: function(){
    timer = setInterval(game.countdown, 1000);


        $('#subwrapper').prepend('<h2 id="clock">Time Remaining: <span id = "counter">20</span> Seconds </h2>');
        $('#start').remove();

        for(var count = 0; count < questions.length; count++) {

            $('#question').append('<h2>' + questions [count].question + '</h2>');
            for (var j = 0; j < questions[count].answers.length; j++) {
                $('#question').append("<input type= 'radio' name='answer"+count+"' value= '" + questions[count].answers[j] + "'>" +
                    "" + questions[count].answers[j])
            }

        }
        $('#question').append('<br><br><button id="end">Done</button>');
  }, 
  done: function (){
        for(var doneCount=0; doneCount< questions.length; doneCount++) {
            var answer = $("input[name='answer"+doneCount+"']:checked").val();
            if(answer == questions[doneCount].correctAnswer){
                game.correct++;
            } else{
                game.incorrect++;
            }
      }
      this.result ();
}, 
result: function (){
    clearInterval(timer);

    $('#subwrapper h2').remove();

    $('#subwrapper').html("<h2>All done!</h2>");
    $('#subwrapper').append ("<h3>Correct Answers: "+this.correct+"</hr3>");
    $('#subwrapper').append ("<h3>Incorrect Answers: "+this.incorrect+"</hr3>");
    $('#subwrapper').append ("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");


}
};