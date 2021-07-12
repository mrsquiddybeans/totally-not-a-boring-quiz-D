class Contestant {
    constructor(){
      this.index = null;
      this.name = null;
      this.answer=0;
    }
  
    getCount(){
      var contestantCountRef = database.ref('contestantCount');
      contestantCountRef.on("value",(data)=>{
        contestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update(){
      var contestantIndex = "contestants/contestant" + this.index;
      database.ref(contestantIndex).set({
        name:this.name,
        answer: this.answer
      });
    }
  
    static getPlayerInfo(){
      var contestantInfoRef = database.ref('cantestants');
      contestantInfoRef.on("value",(data)=>{
        allContestant = data.val();
      })
    }
  }
  