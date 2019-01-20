$(document).ready(function() {
    var obi_wan = {
        name: 'Obi-Wan Kenobi',
        img_file: 'assets/images/obi_wan',
        button_id: 'obi-wan-button',
        health_points: 100,
        base_attack: 5,
        counter_attack: 5

    }
    var skywalker = {
        name: 'Luke Skywalker',
        img_file: 'assets/images/luke_skywalker',
        button_id: 'skywalker-button',
        health_points: 100,
        base_attack: 5,
        counter_attack: 5
    }
    var darth_sidious = {
        name: 'Dark Sidious',
        img_file: 'assets/images/darth_sidious',
        button_id: 'darth-sidious-button',
        health_points: 100,
        base_attack: 5,
        counter_attack: 5
    }
    var darth_maul = {
        name: 'Darth Maul',
        img_file: 'assets/images/darth_maul',
        button_id: 'darth-maul-button',
        health_points: 100,
        base_attack: 5,
        counter_attack: 5
    }

    var character_array = [obi_wan, skywalker, darth_sidious, darth_maul];

    var player_character = null; 
    var computer_characters = [];
    addCharacterList();

// SELECET CHARACTER BUTTON FUNCTIONS
    $("#obi-wan-button").on('click', function(){
        player_character = obi_wan;
        addComputerCharacters()

      
    });
    $("#skywalker-button").on("click", function () {
        player_character = skywalker;
        addComputerCharacters()
    });
    $("#darth-sidious-button").on("click", function () {
        player_character = darth_sidious;
        addComputerCharacters()
    });
    $("#darth-maul-button").on("click", function () {
        player_character = darth_maul;
        addComputerCharacters()
    });

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