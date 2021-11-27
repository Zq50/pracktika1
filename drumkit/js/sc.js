window.addEventListener('keydown',function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.play();
    audio.currentTime = 0;
    audio.play();

    const keys =Array.from(document.querySelectorAll(`.key`));
    keys.forEach(key => key.addEventListener(`transitioned`, removeTransition));
    this.window.addEventListener(`keydown`,playSound);


    function removeTransition(e){
        if (e.propertyName !== `transform`) return;
        e.target.classList.remove(`playing`);
        key.classList.add(`playing`);
        audio.currentTime = 0;
        audio.play();
    }
       
});

