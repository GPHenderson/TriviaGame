$('#start').on ('click', function(){
    game.start ();
})
$(document).on('click', '#end',function(){
    game.done();
})

var questions = [{
    question: "What was the first full-length CGI movie?",
    answers: ["A Bug's Life", "Monster Inc", "Toy Story", "The Lion King"], 
    correctAnswer: "Toy Story"
}];
var questions = [{
    question: "Which of theses is NOT a name of on of the Spice Girls?",
    answers: ["Sporty Spice", "Fred Spice", "Scary Spice", "Posh Spice"], 
    correctAnswer: "Fred Spice"
}];

var questions = [{
    question: "Which NBA team won the most titles in the 90's?",
    answers: ["Bulls", "Lakers", "Celtics", "Knicks"], 
    correctAnswer: "Bulls"
}];

var game = {
    correct: 0,
    incorrect: 0, 
    counter: 20,
    countdown: function(){
        game.counter--;
        $('#counter').html(game.counter);
        if(game.counter<=0){
            console.log ("Time is up!");
            game.done();

        }
    
    },
start: function(){
    timer = setInterval(game.countdown, 1000);
    $('#subwrapper').prepend('<h2>Time Remaining: <span id = "counter">20</span> Seconds </h2>');
    $('#start').remove ();
    for (var i=0; i<questions.length; i++){
        $('#subwrapper').append('<h2>'+ questions [i].question+ '</h2>');
        for (var j=0; j<questions[i].answers.length;j++){
            $("#subwrapper").append ("<input type= 'radio' name='question-"+i+"' value= '"+questions[i].answers[j]+"'>"+questions[i].answers[j])
        }
    }
    $('#subwrapper').append('<br><button id="end">Done</button>');
  }, 
  done: function (){
      $.each ($('input[name="question-0]" :checked'), function (){
          if ($(this).val ()==questions [0].correctAnswer){
              game.correct++;
          }else {
              game.incorrect++;
          }
      });
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