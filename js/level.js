
  var levelData = { 
     1:  [[0,1,1,1,1,1,1,1,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,2,2,2,2,2,2,2,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0]],
      
     2:  [[0,0,2,2,2,2,2,2,0,0,0],
          [0,0,2,2,2,2,2,2,2,2,0],
          [0,0,1,1,1,1,1,1,1,1,0],
          [0,0,1,1,1,1,1,1,1,1,0],
          [0,0,1,1,1,1,1,1,1,1,0],
          [0,0,1,1,1,1,1,1,1,1,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0]],
      //  new change added new levels 
      
     3:  [[0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,1,1,1,1,1,1,1,1],
          [0,2,2,2,2,2,2,0,0,0,0],
          [0,0,2,2,2,2,2,2,2,2,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,1,1,1,1,1,1,1,1,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,1,,1,1,1,,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0]],
      
      4:  [[0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,2,1,1,1,1,1,0,0],
          [0,0,0,1,1,1,1,1,1,1,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,2,2,2,2,2,0],
          [0,0,0,2,2,2,2,2,2,2,0],
          [0,0,0,1,1,1,1,1,1,0,0],
          [0,0,0,1,1,1,1,1,1,0,0],
          [0,0,0,1,1,1,1,1,1,0,0],
          [0,0,0,0,0,0,0,1,0,0,0]],
      
      5:  [[0,1,1,1,1,1,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,2,2,2,2,2,2,2,0,0],
          [0,0,2,2,2,2,2,2,2,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,2,2,2,2,2,2,0,0],
          [0,0,0,2,2,2,2,2,2,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0]]};

// changed sprite data to fit new sprite sheet also added new variables 
  var spriteData = {
    'alien1': { sx: 0,  sy: 0,  w: 55, h: 53, cls: Alien },
    'alien2': { sx: 53,  sy: 0, w: 55, h: 53, cls: Alien, frame: 2},
    'alien3': { sx: 108, sy: 0, w: 55, h: 53, cls: Alien },
    'player': { sx: 159,  sy: 0, w: 52, h: 53, cls: Player },
    'missile': { sx: 215,  sy: 13, w: 12,  h: 31, cls: Missile }
    //'explosion': { sx:0 , sy: , w: , h: , cls: Explosion , frames: 14}
    
  }

  function startGame() {
    var screen = new GameScreen("Alien Invaders","press space to start",
                                 function() {
                                     Game.loadBoard(new GameBoard(1));
                                 });
    Game.loadBoard(screen);
    Game.loop();
  }

  function endGame() {
    var screen = new GameScreen("Game Over","(press space to restart)",
                                 function() {
                                     Game.loadBoard(new GameBoard(1));
                                 });
    Game.loadBoard(screen);
  }


  function winGame() {
    var screen = new GameScreen("You Win!","(press space to restart)",
                                 function() {
                                     Game.loadBoard(new GameBoard(1));
                                 });
    Game.loadBoard(screen);
  }

  $(function() {
    GameAudio.load({ 'fire' : 'media/laser.ogg', 'die' : 'media/explosion.ogg'}, 
                   function() { 
                       Game.initialize("#gameboard", levelData, spriteData,
                                      { "start": startGame,
                                        "die"  : endGame,
                                        "win"  : winGame });
                   });
   });



