

export const Sound = {
    elem: null,
    init : function() {
        this.elem = new Audio();
        this.elem.src = "./sound/bowling_sound.mp3";
    },
    play(){
        if (!this.elem.paused) return;
        this.elem.currentTime = 0;
        this.elem.play();
    },
    pause(){
        if (this.elem.paused) return;
        this.elem.pause();
    }
}