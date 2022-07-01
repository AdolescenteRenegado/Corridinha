class Game {
  constructor() {
    this.resetTitle = createElement("H2")
    this.resetB = createButton("")
this.liderBoard = createElement("H2")
this.leader1 = createElement("H2")
this.leader2 = createElement("H2")
  }
showElements(){
  this.resetTitle.html("reset")
  this.resetTitle.class("resetText")
  this.resetTitle.position(width/2+200,40)
  this.resetB.class("resetButton")
  this.resetB.position(width/2+230,100)
  form.titleImg.position(40,50)
  form.titleImg.class("gameTitleAfterEffect")
this.liderBoard.html("points")
this.liderBoard.class("resetText")
this.liderBoard.position(width/3-60,40)

this.leader1.class("leadersText")
this.leader1.position(width/3-50,80)

this.leader2.class("leadersText")
this.leader2.position(width/3-50,130)
}
  start() {
    form = new Form();
    form.display();
    player = new Player();
    playerCount = player.getCount()
    car1 = createSprite(width/2 -50,height -100)
    car1.addImage("car1",car1img)
    car1.scale = 0.07
    car2 = createSprite(width/2 +50,height -100)
    car2.addImage("car2",car2img)
    car2.scale = 0.07
    cars = [car1,car2]
  }
  play(){
    form.hide()
    Player.getPlayersInfo()
    this.showElements();
    this.reset();
    if(allPlayers!==undefined) {
      image(track,0,-height*5,width,height*6)
      drawSprites()
     this.showLeaderboard()
      var index=0
      for (var plr in allPlayers){
        index = index+1
        var x= allPlayers [plr].posx
        var y= height-allPlayers [plr].posy
        cars[index-1].position.x = x
        cars[index-1].position.y = y
        if(index===player.index){
        camera.position.y=cars[index-1].position.y
        }
      }
       this.controls()
    }
  }
  getState(){
    var stateRef = database.ref("gameState")
    stateRef.on ("value",function(data){
      gameState = data.val()
    })
  }
  update(state){
    database.ref("/").update({
    gameState:state
    })
  }
 controls (){
  if(keyIsDown(UP_ARROW)){
    player.posy+=10
    player.update()
  }
  if(keyIsDown(LEFT_ARROW)&&player.posx>width/3-50){
    player.posx-=5
    player.update()
  }
  if(keyIsDown(RIGHT_ARROW)&&player.posx<width/2+300){
    player.posx+=5
    player.update()
  }
}
reset(){
  this.resetB.mousePressed(()=>{
    database.ref("/").set({
      carsEnd:0,
    playerCount:0,
    gameState:0,
    players:{}
    })
    location.reload()
  })
}
showLeaderboard() {
  var leader1, leader2;
  var players = Object.values(allPlayers);
  if (
    (players[0].rank === 0 && players[1].rank === 0) ||
    players[0].rank === 1
  ) {
    // &emsp;    Essa etiqueta é usada para exibir quatro espaços.
    leader1 =
      players[0].rank +
      "&emsp;" +
      players[0].name +
      "&emsp;" +
      players[0].score;

    leader2 =
      players[1].rank +
      "&emsp;" +
      players[1].name +
      "&emsp;" +
      players[1].score;
  }

  if (players[1].rank === 1) {
    leader1 =
      players[1].rank +
      "&emsp;" +
      players[1].name +
      "&emsp;" +
      players[1].score;

    leader2 =
      players[0].rank +
      "&emsp;" +
      players[0].name +
      "&emsp;" +
      players[0].score;
  }

  this.leader1.html(leader1);
  this.leader2.html(leader2);
}
}
