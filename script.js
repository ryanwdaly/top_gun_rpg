$(document).ready(function() {

    initialize();
    selected_character = null;
    enemy_characters = null;
    selected_enemy = null; 
    
    //Click to choose a character
    $("body").on("click", "#selection",  function() {
        self = $(this);
        //Match IMG ID with Character object
        if (self.attr("id") === "selection")
        for (i=0; i<character_array.length; i++){
            if (self.attr("character-name") === character_array[i].name){
                selected_character = character_array[i];
                break;
            }
        }
        
        //Add Slected character icon to Your character container
        var newIcon = generateImg(selected_character)
        newIcon.attr("id", "player-character")
        $("#player-character-container").append(newIcon);

        //add nonselected character icons to enemies container
        character_array.forEach(function(character) {
            if (character.name != selected_character.name) {
                newIcon = generateImg(character);
                newIcon.attr("class", "enemy-character")
                $("#enemies-container").append(newIcon);
            }
        });
    });
      //Select enemy to attack
      $("body").on("click", ".enemy-character", function() {
            var enemy_icon = generateImg();
            enemy_icon.attr("class", "character-incons")
            $("#fight-section-container").append(enemy_icon);
            $("#fight-section-container").append(selected_character);
      });


// SELECET CHARACTER BUTTON FUNCTIONS




// ATTACK BUTTON
$("#attack-button").on('click', function() {
    
    
});



// HELPER METHODS
function initialize() {
    var maverick = {
        name: 'maverick',
        img_file: 'assets/images/maverick',
        health_points: 100,
        base_attack: 5,
        counter_attack: 5
        
    }
    var iceman = {
        name: 'iceman',
        img_file: 'assets/images/iceman',
        health_points: 100,
        base_attack: 5,
        counter_attack: 5
    }
    var goose = {
        name: 'viper',
        img_file: 'assets/images/goose',
        health_points: 100,
        base_attack: 5,
        counter_attack: 5
    }
    var viper = {
        name: 'goose',
        img_file: 'assets/images/viper',
        health_points: 100,
        base_attack: 5,
        counter_attack: 5
    }
    character_array = [maverick, iceman, goose, viper];
    
    for (i = 0; i < character_array.length; i++) {
        newIcon = generateImg(character_array[i])
        newIcon.attr("id", "selection")
        $("#character-select-container").append(newIcon);
    }
}

function generateImg(object) {
    var newIcon = $("<img>");
   
    newIcon.attr({
        "character-name": object.name,
        class: "character-icons",
        src: object.img_file + ".jpg",
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
    



});