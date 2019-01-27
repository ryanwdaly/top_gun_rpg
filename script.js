$(document).ready(function() {
    
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
    var character_array = [maverick, iceman, goose, viper];
    

    var player_character = null; 
    var computer_characters = [];
    //Initialize
    createCharacterIcons(character_array);
    //

    //Choose Character 
    $("body").on("click", ".character-icons",  function() {
        //Match IMG ID with Character object
        for (i=0; i<character_array.length; i++){
            if ($(this).attr("character-name") === character_array[i].name){
                var selected_character = character_array[i];
                break;
            }
        }
        
        //Add Slected character icon to Your character container
        var newIcon = generateImg(selected_character)
        newIcon.attr("status", "player-character")
        $("#player-character-container").append(newIcon);

        //add nonselected character icons to enemies container
        character_array.forEach(function(character) {
            if (character.name != selected_character.name) {
                newIcon = generateImg(character);
                newIcon.attr("status", "enemy-character")
                $("#enemies-container").append(newIcon);
            }
        });


    });


// SELECET CHARACTER BUTTON FUNCTIONS
function generateImg(object) {
    var newIcon = $("<img>");
   
    newIcon.attr({
        "character-name": object.name,
        class: "character-icons",
        src: object.img_file + ".jpg",
    

    });
    return newIcon;
}

function createCharacterIcons(array) {
    
    for (i=0; i < array.length; i++) {
        newIcon = generateImg(array[i], "character-select-container")
        newIcon.attr("status", "selection")
        $("#character-select-container").append(newIcon);
    }
}


// ATTACK BUTTON
    $("#attack-button").on('click', function() {

      
    });


    
// HELPER METHODS
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