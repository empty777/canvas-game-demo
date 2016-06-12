function runGame() {
  window.onload = function() {
    var canvas = document.getElementById('canvas');
    canvas.width  = 1024;
    canvas.height = 576;
    var ctx = canvas.getContext('2d');
    var tileHeight = 64;
    var tileHeightUI = 32;
    var playerPosX = 8;
    var playerPosY = 4;
    var mob1PosX = 6;
    var mob1PosY = 4;
    var playerHealth = 10;
    var mob1Health = 3;
    var inputEnabled = true;
    var PlayerAttackEnabled = true;
    var wanderEnabled = true;
    var tilePlayerAssessableNorth = true;
    var tilePlayerAssessableSouth = true;
    var tilePlayerAssessableWest = true;
    var tilePlayerAssessableEast = true;
    var tileMobAssessableNorth = true;
    var tileMobAssessableSouth = true;
    var tileMobAssessableWest = true;
    var tileMobAssessableEast = true;
    var playerAlive = true;
    var mob1Alive = true;
    var chance25 = 0;
    var wanderDirection = 0

    //images
    //background tiles
    var bgSprite = new Image();
    bgSprite.src = 'assets/images/background tiles/StoneBricks64px.png';
    var bgSprite2 = new Image();
    bgSprite2.src = 'assets/images/background tiles/backgroundWall.png';
    //player sprites
    var playerSprite = new Image();
    playerSprite.src = 'assets/images/char sprites/zisteauSprite64px.png';
    //mob sprites
    var sheepSprite = new Image();
    sheepSprite.src = 'assets/images/mob sprites/sheep.png';
    var sheepHurtSprite = new Image();
    sheepHurtSprite.src = 'assets/images/mob sprites/sheepHurt.png';
    //ui
    var heartRed = new Image();
    heartRed.src = 'assets/images/ui/heart.png';
    var heartBlack = new Image();
    heartBlack.src = 'assets/images/ui/heart-black.png';

    //sounds
    var hurtSound = new Audio();
    hurtSound.src = 'assets/sounds/The_Legend_of_Zelda_Hurt_Sound_Effect.mp3';
    var deathSound = new Audio();
    deathSound.src = 'assets/sounds/The_Legend_of_Zelda_Die_Sound_Effect.mp3';
    var introSound = new Audio();
    introSound.src = 'assets/sounds/Metroid_Fanfare_Sound_Effect.mp3';
    var sheepIdleSound = new Audio();
    sheepIdleSound.src = 'assets/sounds/mobs/sheep/sheep1.mp3';
    var sheepHurtSound = new Audio();
    sheepHurtSound.src = 'assets/sounds/mobs/sheep/sheep3.mp3';

    function drawPlayer() {
      ctx.drawImage(playerSprite,tileHeight*playerPosX,tileHeight*playerPosY,tileHeight,tileHeight)
      drawUI();
    }

    function erasePlayer() {
      ctx.drawImage(bgSprite,tileHeight*playerPosX,tileHeight*playerPosY,tileHeight,tileHeight)
      drawUI();
    }

    function dmgPlayer() {
      playerHealth = playerHealth - 1;
      hurtSound.play()
      drawUI();

      if (playerHealth < 1) {
        inputEnabled = false;
        playerAlive = false;
        erasePlayer();
        deathSound.play();
        alert("Game over!");
      }
    }

    function drawBackground() {
      //Tile Grid
      //row 1
      ctx.drawImage(bgSprite,tileHeight*0,tileHeight*0,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*1,tileHeight*0,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*2,tileHeight*0,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*3,tileHeight*0,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*4,tileHeight*0,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*5,tileHeight*0,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*6,tileHeight*0,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*7,tileHeight*0,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*8,tileHeight*0,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*9,tileHeight*0,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*10,tileHeight*0,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*11,tileHeight*0,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*12,tileHeight*0,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*13,tileHeight*0,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*14,tileHeight*0,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*15,tileHeight*0,tileHeight,tileHeight)
      //row 2
      ctx.drawImage(bgSprite,tileHeight*0,tileHeight*1,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*1,tileHeight*1,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*2,tileHeight*1,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*3,tileHeight*1,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*4,tileHeight*1,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*5,tileHeight*1,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*6,tileHeight*1,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*7,tileHeight*1,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*8,tileHeight*1,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*9,tileHeight*1,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*10,tileHeight*1,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*11,tileHeight*1,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*12,tileHeight*1,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*13,tileHeight*1,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*14,tileHeight*1,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*15,tileHeight*1,tileHeight,tileHeight)
      //row 3
      ctx.drawImage(bgSprite,tileHeight*0,tileHeight*2,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*1,tileHeight*2,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*2,tileHeight*2,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*3,tileHeight*2,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*4,tileHeight*2,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*5,tileHeight*2,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*6,tileHeight*2,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*7,tileHeight*2,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*8,tileHeight*2,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*9,tileHeight*2,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*10,tileHeight*2,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*11,tileHeight*2,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*12,tileHeight*2,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*13,tileHeight*2,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*14,tileHeight*2,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*15,tileHeight*2,tileHeight,tileHeight)
      //row 4
      ctx.drawImage(bgSprite,tileHeight*0,tileHeight*3,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*1,tileHeight*3,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*2,tileHeight*3,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*3,tileHeight*3,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*4,tileHeight*3,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*5,tileHeight*3,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*6,tileHeight*3,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*7,tileHeight*3,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*8,tileHeight*3,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*9,tileHeight*3,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*10,tileHeight*3,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*11,tileHeight*3,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*12,tileHeight*3,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*13,tileHeight*3,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*14,tileHeight*3,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*15,tileHeight*3,tileHeight,tileHeight)
      //row 5
      ctx.drawImage(bgSprite,tileHeight*0,tileHeight*4,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*1,tileHeight*4,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*2,tileHeight*4,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*3,tileHeight*4,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*4,tileHeight*4,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*5,tileHeight*4,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*6,tileHeight*4,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*7,tileHeight*4,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*8,tileHeight*4,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*9,tileHeight*4,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*10,tileHeight*4,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*11,tileHeight*4,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*12,tileHeight*4,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*13,tileHeight*4,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*14,tileHeight*4,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*15,tileHeight*4,tileHeight,tileHeight)
      //row 6
      ctx.drawImage(bgSprite,tileHeight*0,tileHeight*5,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*1,tileHeight*5,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*2,tileHeight*5,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*3,tileHeight*5,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*4,tileHeight*5,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*5,tileHeight*5,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*6,tileHeight*5,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*7,tileHeight*5,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*8,tileHeight*5,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*9,tileHeight*5,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*10,tileHeight*5,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*11,tileHeight*5,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*12,tileHeight*5,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*13,tileHeight*5,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*14,tileHeight*5,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*15,tileHeight*5,tileHeight,tileHeight)
      //row 7
      ctx.drawImage(bgSprite,tileHeight*0,tileHeight*6,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*1,tileHeight*6,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*2,tileHeight*6,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*3,tileHeight*6,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*4,tileHeight*6,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*5,tileHeight*6,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*6,tileHeight*6,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*7,tileHeight*6,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*8,tileHeight*6,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*9,tileHeight*6,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*10,tileHeight*6,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*11,tileHeight*6,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*12,tileHeight*6,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*13,tileHeight*6,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*14,tileHeight*6,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*15,tileHeight*6,tileHeight,tileHeight)
      //row 8
      ctx.drawImage(bgSprite,tileHeight*0,tileHeight*7,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*1,tileHeight*7,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*2,tileHeight*7,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*3,tileHeight*7,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*4,tileHeight*7,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*5,tileHeight*7,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*6,tileHeight*7,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*7,tileHeight*7,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*8,tileHeight*7,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*9,tileHeight*7,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*10,tileHeight*7,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*11,tileHeight*7,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*12,tileHeight*7,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*13,tileHeight*7,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*14,tileHeight*7,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*15,tileHeight*7,tileHeight,tileHeight)
      //row 9
      ctx.drawImage(bgSprite,tileHeight*0,tileHeight*8,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*1,tileHeight*8,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*2,tileHeight*8,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*3,tileHeight*8,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*4,tileHeight*8,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*5,tileHeight*8,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*6,tileHeight*8,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*7,tileHeight*8,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*8,tileHeight*8,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*9,tileHeight*8,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*10,tileHeight*8,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*11,tileHeight*8,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*12,tileHeight*8,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*13,tileHeight*8,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*14,tileHeight*8,tileHeight,tileHeight)
      ctx.drawImage(bgSprite,tileHeight*15,tileHeight*8,tileHeight,tileHeight)
    };

    function enableInput() {
      window.addEventListener('keydown',doKeyDown,true);

      function doKeyDown(evt){
        switch (evt.keyCode) {
          case 87:  /* w was pressed */
            //alert("up");
            playerMoveNorth();
          break;
          case 83:  /* s was pressed */
            //alert("down");
            playerMoveSouth();
          break;
          case 65:  /* a was pressed */
            //alert("left");
            playerMoveWest();
          break;
          case 68:  /* d was pressed */
            //alert("right");
            playerMoveEast();
          break;
          case 84:  /* t was pressed */
            dmgPlayer();
          break;
          case 75:  /* k was pressed */
            //disable inputs
            if (inputEnabled == true) {
              //alert("input disabled!")
              inputEnabled = false;
            } else {
              //alert("input enabled!")
              inputEnabled = true;
            };
          break;
          case 70:  /* f was pressed */
            if (PlayerAttackEnabled == true) {
              playerAttack();
            };
          break;
          case 77:  /* m was pressed */
            drawMobs();
            mob1Alive = true;
            mob1Health = 40;
          break;
        };
      };
    };

    function playerMoveNorth() {
      if (mob1Alive == true) {
        collisionDetection_playerToMob();
      }
      if (inputEnabled == true &&
          tilePlayerAssessableNorth == true &&
          playerPosY > 0) {
        erasePlayer();
        playerPosY = playerPosY - 1;
        drawPlayer();
      };
    };

    function playerMoveSouth() {
      if (mob1Alive == true) {
        collisionDetection_playerToMob();
      }
      if (inputEnabled == true &&
          tilePlayerAssessableSouth == true &&
          playerPosY < 8) {
        erasePlayer();
        playerPosY = playerPosY + 1;
        drawPlayer();
      };
    };

    function playerMoveWest() {
      if (mob1Alive == true) {
        collisionDetection_playerToMob();
      }
      if (inputEnabled == true &&
          tilePlayerAssessableWest == true &&
          playerPosX > 0) {
        erasePlayer();
        playerPosX = playerPosX - 1;
        drawPlayer();
      };
    };

    function playerMoveEast() {
      if (mob1Alive == true) {
        collisionDetection_playerToMob();
      }
      if (inputEnabled == true &&
          tilePlayerAssessableEast == true &&
          playerPosX < 15) {
        erasePlayer();
        playerPosX = playerPosX + 1;
        drawPlayer();
      };
    };

    function drawUI() {
      if (playerHealth >= 1) {
        ctx.drawImage(heartRed,tileHeightUI*0,0,tileHeightUI,tileHeightUI)
      } else {
        ctx.drawImage(heartBlack,tileHeightUI*0,0,tileHeightUI,tileHeightUI)
      }
      if (playerHealth >= 2) {
        ctx.drawImage(heartRed,tileHeightUI*1,0,tileHeightUI,tileHeightUI)
      } else {
        ctx.drawImage(heartBlack,tileHeightUI*1,0,tileHeightUI,tileHeightUI)
      }
      if (playerHealth >= 3) {
        ctx.drawImage(heartRed,tileHeightUI*2,0,tileHeightUI,tileHeightUI)
      } else {
        ctx.drawImage(heartBlack,tileHeightUI*2,0,tileHeightUI,tileHeightUI)
      }
      if (playerHealth >= 4) {
        ctx.drawImage(heartRed,tileHeightUI*3,0,tileHeightUI,tileHeightUI)
      } else {
        ctx.drawImage(heartBlack,tileHeightUI*3,0,tileHeightUI,tileHeightUI)
      }
      if (playerHealth >= 5) {
        ctx.drawImage(heartRed,tileHeightUI*4,0,tileHeightUI,tileHeightUI)
      } else {
        ctx.drawImage(heartBlack,tileHeightUI*4,0,tileHeightUI,tileHeightUI)
      }
      if (playerHealth >= 6) {
        ctx.drawImage(heartRed,tileHeightUI*5,0,tileHeightUI,tileHeightUI)
      } else {
        ctx.drawImage(heartBlack,tileHeightUI*5,0,tileHeightUI,tileHeightUI)
      }
      if (playerHealth >= 7) {
        ctx.drawImage(heartRed,tileHeightUI*6,0,tileHeightUI,tileHeightUI)
      } else {
        ctx.drawImage(heartBlack,tileHeightUI*6,0,tileHeightUI,tileHeightUI)
      }
      if (playerHealth >= 8) {
        ctx.drawImage(heartRed,tileHeightUI*7,0,tileHeightUI,tileHeightUI)
      } else {
        ctx.drawImage(heartBlack,tileHeightUI*7,0,tileHeightUI,tileHeightUI)
      }
      if (playerHealth >= 9) {
        ctx.drawImage(heartRed,tileHeightUI*8,0,tileHeightUI,tileHeightUI)
      } else {
        ctx.drawImage(heartBlack,tileHeightUI*8,0,tileHeightUI,tileHeightUI)
      }
      if (playerHealth >= 10) {
        ctx.drawImage(heartRed,tileHeightUI*9,0,tileHeightUI,tileHeightUI)
      } else {
        ctx.drawImage(heartBlack,tileHeightUI*9,0,tileHeightUI,tileHeightUI)
      }
    }

    function drawMobs() {
      function drawMob1() {
        ctx.drawImage(sheepSprite,tileHeight*mob1PosX,tileHeight*mob1PosY,tileHeight,tileHeight)
        drawUI();
      };
      drawMob1();
    };

    function eraseMobs() {
      function eraseMob1() {
        ctx.drawImage(bgSprite,tileHeight*mob1PosX,tileHeight*mob1PosY,tileHeight,tileHeight)
        drawUI();
      };
      eraseMob1();
    }

    function mobWander() {
      if (mob1Alive == true) {
        wanderDirection = Math.floor((Math.random() * 4) + 1);
        eraseMobs();
        if (wanderDirection == 1) {
          if (playerAlive == true) {
            collisionDetection_mobToPlayer();
          }
          if (mob1PosY > 0 &&
              tileMobAssessableNorth == true) {
            mob1PosY = mob1PosY - 1;
          };
        };
        if (wanderDirection == 2) {
          if (playerAlive == true) {
            collisionDetection_mobToPlayer();
          }
          if (mob1PosY < 8 &&
              tileMobAssessableSouth == true) {
            mob1PosY = mob1PosY + 1;
          };
        };
        if (wanderDirection == 3) {
          if (playerAlive == true) {
            collisionDetection_mobToPlayer();
          }
          if (mob1PosX > 0 &&
              tilePlayerAssessableWest == true) {
            mob1PosX = mob1PosX - 1;
          };
        };
        if (wanderDirection == 4) {
          if (playerAlive == true) {
            collisionDetection_mobToPlayer();
          }
          if (mob1PosX < 15 &&
              tileMobAssessableEast == true) {
            mob1PosX = mob1PosX + 1;
          };
        };
        drawMobs();
        drawUI();
      };
    };

    function dmgMob1() {
      var timeout1 = window.setTimeout(redrawMob1, 600);
      var timeout2 = window.setTimeout(reenableAttack, 1000);
      var timeout3 = window.setTimeout(reenableWander, 2000);
      sheepHurtSound.play();
      wanderEnabled = false;
      PlayerAttackEnabled = false;
      eraseMobs();
      ctx.drawImage(sheepHurtSprite,tileHeight*mob1PosX,tileHeight*mob1PosY,tileHeight,tileHeight);
      function redrawMob1() {
        eraseMobs();
        drawMobs();
        if (mob1Health < 1) {
          mob1Alive = false;
          eraseMobs();
          alert('sheep was slain');
        };
      };
      function reenableWander() {
        wanderEnabled = true;
      };
      function reenableAttack() {
        PlayerAttackEnabled = true;
      };
      timeout1
      timeout2
      timeout3
    };

    function playerAttack() {
      if (mob1Alive == true) {
        if (playerPosY == mob1PosY - 1 &&
            playerPosX == mob1PosX ||
            playerPosY == mob1PosY + 1 &&
            playerPosX == mob1PosX ||
            playerPosX == mob1PosX - 1 &&
            playerPosY == mob1PosY ||
            playerPosX == mob1PosX + 1 &&
            playerPosY == mob1PosY) {
          mob1Health = mob1Health - 1;
          dmgMob1();
        }
      }
    }

    function collisionDetection_playerToMob() {
      if (mob1PosY == playerPosY - 1 &&
          mob1PosX == playerPosX) {
        tilePlayerAssessableNorth = false;
      } else {
        tilePlayerAssessableNorth = true;
      }
      if (mob1PosY == playerPosY + 1 &&
          mob1PosX == playerPosX) {
        tilePlayerAssessableSouth = false;
      } else {
        tilePlayerAssessableSouth = true;
      }
      if (mob1PosX == playerPosX - 1 &&
          mob1PosY == playerPosY) {
        tilePlayerAssessableWest = false;
      } else {
        tilePlayerAssessableWest = true;
      }
      if (mob1PosX == playerPosX + 1 &&
          mob1PosY == playerPosY) {
        tilePlayerAssessableEast = false;
      } else {
        tilePlayerAssessableEast = true;
      }
    };

    function collisionDetection_mobToPlayer() {
      if (playerPosY == mob1PosY - 1 &&
          mob1PosX == playerPosX) {
        tileMobAssessableNorth = false;
      } else {
        tileMobAssessableNorth = true;
      }
      if (playerPosY == mob1PosY + 1 &&
          mob1PosX == playerPosX) {
        tileMobAssessableSouth = false;
      } else {
        tileMobAssessableSouth = true;
      }
      if (playerPosX == mob1PosX - 1 &&
          mob1PosY == playerPosY) {
        tileMobAssessableWest = false;
      } else {
        tileMobAssessableWest = true;
      }
      if (playerPosX == mob1PosX + 1 &&
          mob1PosY == playerPosY) {
        tileMobAssessableEast = false;
      } else {
        tileMobAssessableEast = true;
      }
    };

    function collisionAdjust() {
      if (mob1PosY == playerPosY &&
          mob1PosX == playerPosX &&
          playerAlive == true &&
          mob1Alive == true) {
        if (playerPosY > 0) {
          playerMoveNorth();
        } else {
          playerMoveSouth();
        };
        eraseMobs();
        drawMobs();
      };
    };

    introSound.play();

    bgSprite.onload = function() {
      drawBackground();
      drawPlayer();
      enableInput();
      drawMobs();
      drawUI();
    };

    //mob ai random timing
    var interval1 = window.setInterval(tic,1000);

    function tic() {
      chance25 = Math.floor((Math.random() * 100) + 1);
      if (chance25 <= 40) {
        mobWander();
      };
      if (chance25 <= 20 &&
          mob1Alive == true &&
          wanderEnabled == true) {
        sheepIdleSound.play();
      };
      if (mob1PosY == playerPosY &&
          mob1PosX == playerPosX) {
        collisionAdjust();
      };
    };
  };
};
runGame();
