$(document).ready(function() {

    characters = {
        maverick: {
            name: 'maverick',
            imgFile: 'assets/images/maverick',
            healthPoints: 100,
            baseAttack: 50,
            counterAttack: 5

        },
        iceman: {
            name: 'iceman',
            imgFile: 'assets/images/iceman',
            healthPoints: 100,
            baseAttack: 5,
            counterAttack: 5
        },
        goose: {
            name: 'viper',
            imgFile: 'assets/images/goose',
            healthPoints: 100,
            baseAttack: 5,
            counterAttack: 5
        },
        viper: {
            name: 'goose',
            imgFile: 'assets/images/viper',
            healthPoints: 100,
            baseAttack: 5,
            counterAttack: 5
        }
    }
    
    var selectedCharacterName = null;
    var enemyCharacters = [];
    var selectedEnemyName = null; 
    
    //Generate the character icons in the Character selection container
    for(var key in characters) {
        var img = generateImg(characters[key]);
        img.attr("id", "selection");
        $("#character-select-container").append(img);
    }
       
   
    //Click to choose a character
    $("body").on("click", "#selection",  function() {
        self = $(this);
        
        //Sort into global variables
        for (var key in characters) {
            if (self.attr("character-name") === characters[key].name){
                selectedCharacterName = characters[key].name;
            } else {
                enemyCharacters.push(characters[key].name);
            }
        }
        
        
        //Add Slected character icon to Your character container
        var newIcon = generateImg(idCharacterByName(selectedCharacterName));
        newIcon.attr("id", "player-character")
        $("#player-character-container").append(newIcon);
        
        generateEnemyIcons(enemyCharacters);
            
        //Remove character selection icons
        $("#character-select-container").remove();
        
    });
    
    //Select enemy to attack
    $("body").on("click", ".enemy-character", function() {
        self = $(this);

        selectedEnemyName = self.attr("character-name");

        var enemy_icon = generateImg(idCharacterByName(selectedEnemyName));
        var player_icon = generateImg(idCharacterByName(selectedCharacterName));
        enemy_icon.attr({
            class: "fighter-section-icons",
            id: "attacking-enemy"
        });
        player_icon.attr({
            class: "fighter-section-icons",
            id: "attacking-player"
        });

        $("#fight-section-container").append(player_icon);
  
        $("#fight-section-container").append(enemy_icon);
      
    
        //Create attack button
        var attack_button = $("<button>")
        attack_button.attr({
                id: 'attack-button',
                type: "button",
                class: 'btn',
                value: "Attack!"
        });
                $("#attack-button-container").append(attack_button);
                $("#attack-button").append("Attack!")
        //         $("#enemies-container").remove(self);
    });

    //attack button
    $("body").on("click", "#attack-button", function() {
      
        playerCharacter = idCharacterByName(selectedCharacterName);
        enemyCharacter = idCharacterByName(selectedEnemyName);
        
        enemyCharacter.healthPoints -= playerCharacter.baseAttack;
        if (enemyCharacter.healthPoints <= 0) {
            console.log("Victory!");
            for(i = 0; i < enemyCharacters.length; i++) {
                if (enemyCharacters[i] === selectedEnemyName) {
                    delete enemyCharacters[i]

                }
            }
            
            generateEnemyIcons(enemyCharacters);

        } else {
            playerCharacter.healthPoints -= enemyCharacter.baseAttack
        }

        if (playerCharacter.healthPoints <= 0 ) {
            alert("lost")
        }
        
        
    });
});

// HELPER METHODS
function generateEnemyIcons(enemyCharacters) {
    $("#enemies-container").empty();
    $("#fight-section-container").empty();
    $("#attack-button-container").empty();
    console.log(enemyCharacters)
    //add nonselected character icons to enemies container
    enemyCharacters.forEach(function (enemy) {
        newIcon = generateImg(idCharacterByName(enemy));
        newIcon.attr({
            "class": "enemy-character",
            "character-name": enemy
        });
        $("#enemies-container").append(newIcon);
    });
}
function idCharacterByName(name) {
    for (var key in characters) {
       if(characters[key].name === name) {
           return characters[key];
       }
    }
}

function generateImg(object) {
    var newIcon = $("<img>");
   
    newIcon.attr({
        "character-name": object.name,
        class: "character-icons",
        src: object.imgFile + ".jpg",
    });
    return newIcon;
}
function addCharacterList() {
    
        for(i = 0; i < character_array.length; i++) {
            // '<img class="character-selection-img" src="' + character_array[i].img_file + '.jpg"></img>'
           
            // $("#character-selection").append('<button id="' + character_array[i].button_id + '"><img class="character-selection-img" src="'+ character_array[i].img_file + '.jpg"></img></button>');
            $("#character-selection").append('<button id="' + character_array[i].button_id + '" class="btn btn-primary character-btn">'+ character_array[i].name + '</button');
            
        }
    }

function addComputerCharacters() {

    for(i=0; i < character_array.length; i++){
        if(character_array[i] != player_character) {
            computer_characters.push(character_array[i]);
        }
    }
}
    


