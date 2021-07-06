class Player{
    constructor(){
        this.index = null;
        this.name = null;
        this.rank = null;
        this.score = 0;
        this.answer = null;
    }

    getCount(){
        var playerStateRef = database.ref('playerCount');
        playerStateRef.on("value",function (data){
            playerCount = data.val();
        }) 
    }

    

    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }

    getPlayerAtEnd(){
        var PlayerAtEnd = database.ref('playerAtEnd');
        PlayerAtEnd.on("value",(data)=>{
            this.rank = data.val();
        })
    }

    static updatePlayerAtEnd(rank){
        database.ref('/').update({
            playerAtEnd : rank
        })
    }

    static getAnswer()
    {
        var playerAnswer = database.ref('WordName');
        playerAnswer.on("value",(data)=>{
            allWordNames = data.val();
        })
    
    }

    update(){
        var playerIndex = "Players/Player"+this.index;
        database.ref(playerIndex).set({
            name : this.name,
            playerAnswer : this.answer
        })
    }

    static getPlayerInfo(){
        var playerInforef = database.ref('Players');
        playerInforef.on("value",(data)=>{
            allPlayers = data.val();
        })
    }
    
}
