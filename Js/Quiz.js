class Quiz{
    constructor(){

    }
    
    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
    
      }
      
      update(state){
        database.ref('/').update({
          gameState: state
        });
      }
    
      async start(){
        if(gameState === 0){
          contestant = new Contestant();
          var contestantCountRef = await database.ref('contestantCount').once("value");
          if(contestantCountRef.exists()){
            contestantCount = contestantCountRef.val();
            contestant.getCount();
          }
          question = new Question()
          question.display();
        }
        
}
play(){
    question.hide();
    background("yellow")
    fill("white")
    textSize(30)
    text("Result of the Quiz",340,50)
    text("------------------",320,65 )
    contestant.getPlayerInfo();
    
    if(allContestant !== undefined){
      //background(ground)
      debugger;
      var display_answers=230
      fill("Blue")
      textSize(20)
      text("Note: Contestant who answered correct are highlighted in Green Color", 130, 230)


        for(var plr in allContestant){
            debugger;
           var correct_ans="2"
           if(correct_ans===allContestant[plr].answer)
             fill("green")
             else 
             fill("red")
             display_answers+=30
             textSize(20);
             text(allContestant[plr].name + ": " + allContestant[plr].answer, 250,display_answer)

         
        }
       
        
   
      }

}}