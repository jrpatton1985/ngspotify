window.addEventListener("load", setListeners());
/* this line dinamically adds a method to the String object
 * working on the prototype of the object
 */
String.prototype.endsWith = function(suffix) {
return this.indexOf(suffix, this.length - suffix.length) !== -1;
};
var audio = new Audio();
function setListeners(){
  var index = 0;
    var buttons = document.getElementsByClassName("soundBt");
    for (index = 0; index < buttons.length; index++){
        var button = buttons[index];
        button.addEventListener("click", function(){
            var buttons = document.getElementsByClassName("soundBt");
            var index = 0;
            for (index = 0; index < buttons.length; index++){
                buttons[index].style.background = "url(assets/img/play.png) no-repeat";
            }
            if(audio.paused){
                var fileToPlay = this.getAttribute("name");
                audio.src = fileToPlay + '.mp3';
                audio.play();
                this.style.background = "url(assets/img/pause.png) no-repeat";
            }
            else{
                audio.pause();
                this.style.background = "url(assets/img/play.png) no-repeat";
            }
        });
    }
}
audio.addEventListener("ended", function(){
    var buttons = document.getElementsByClassName("soundBt");
    var index = 0;
    for (index = 0; index < buttons.length; index++){
        var button = buttons[index];
        var buttonName = button.getAttribute("name");
        var audiosrc = audio.src;
        if (audio.src.endsWith(buttonName)){
            button.style.background = "url(assets/img/play.png) no-repeat";
            return;
        }
    }
});
