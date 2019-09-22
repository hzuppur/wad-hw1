var $:any = require("jquery");


$(document).ready(() =>{
    let name: string = $("#name").text();

    $("#nameTarget").text(name);
});
