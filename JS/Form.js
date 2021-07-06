class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton('Play');
        this.greeting = createElement('h4');
        this.reset = createButton('reset');
     }
   hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }

    display(){
        
        this.input.position(700,460);
        this.button.position(770,500);
        this.reset.position(1300,20);
        
        this.input.style('background','grey');
        this.button.style('background','255,103,103');
        this.greeting.style('background','yellow');
        this.reset.style('background','lightblue');
                    
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
 
            player.name = this.input.value();
            
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            
            this.greeting.html("hello, "+ player.name);
            this.greeting.size(180);
            this.greeting.position(700,500);    
        })

        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
            var playerInfo = database.ref('Players');
            playerInfo.remove();
            Player.updatePlayerAtEnd(0);
        });

        
        
    }
}
