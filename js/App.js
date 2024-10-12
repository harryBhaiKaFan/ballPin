import { Game } from "./Game.js";

const screen = document.querySelector("#screen");

const App = {
    init: function () {
        Game.init({screen,sound:true});
    }
};

window.onload = App.init.bind(App);