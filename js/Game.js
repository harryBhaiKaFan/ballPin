
import { Sound } from "./Sound.js";


export const Game = {
    SCREEN:null,
    CTX:null,
    init: function({screen,sound}){
        this.SCREEN = screen;
        this.CTX = screen.getContext("2d");

        console.log(this.CTX);
        if (sound) {
            Sound.init();
        }
        
    },

    render: function(){
        
    }
};