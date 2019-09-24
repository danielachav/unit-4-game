$(document).ready(function() {
    
    var win=0;
    var loss=0;
    
    function init() {
         compGuess=0;
         userScore=0;
         redCrystal=0;
         blueCrystal=0;
         greenCrystal=0;
         yellowCrystal=0;
         userScore=0;
         
        compGuess= Math.floor(Math.random() * 120) + 19;
        console.log(compGuess);
        $('#computerGuess').html(compGuess);
    
        redCrystal= Math.floor(Math.random() * 12) + 1;
        $('.red').attr('value',redCrystal);
        console.log("Red's value is: "+redCrystal);
    
        greenCrystal= Math.floor(Math.random() * 12) + 1;
        $('.green').attr('value',greenCrystal);
        console.log("Green's value is: "+greenCrystal);
    
        blueCrystal= Math.floor(Math.random() * 12) + 1;
        $('.blue').attr('value',blueCrystal);
        console.log("Blue's value is: "+blueCrystal);
    
        yellowCrystal= Math.floor(Math.random() * 12) + 1;
        $('.yellow').attr('value',yellowCrystal);
        console.log("Yellow's value is: "+yellowCrystal);
    
        $('#showscore').html(userScore);	
        
    }
    init();
    
        $('.crystal').click(function play(){
             
            if($(this).hasClass('crystal')){
                score=parseInt($(this).attr('value'));
                userScore+=score;
                $('#showscore').html(userScore);	
    
            if(userScore===compGuess){
                 var audio= document.createElement('audio');
                     audio.setAttribute('src', 'assets/audio/you-win-sound-effect.mp3');
                 audio.play();
                    win++;
    
                 $('#wins').html(win);
                
                 init();
                
            }else if(userScore>compGuess){
                loss++;
                 var audio= document.createElement('audio');
                    audio.setAttribute('src', 'assets/audio/Lose-sound-effects.mp3');
                  audio.play();
                 $('#lose').html(loss);
                 
                 init();
                }
            }
        });
    });