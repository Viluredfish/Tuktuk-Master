var GameView = function(load) {
    this.render = function() {
        this.el.html(GameView.template());
        return this;
    },

    this.initialize = function() {
        this.el = $('<div/>');
    };
 
    this.initialize();
 
 }
 
GameView.template = Handlebars.compile($("#game-tpl").html());