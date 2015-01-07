var NewGameView = function() {
    this.render = function(store) {

        var vars = 
        {
            status : window.location.hash.match(/[A-z]{1,}/)
        };

        // New game
        vars.nickName = '';
        vars.lvl = 0;
        vars.money = 0;
        vars.titre = 'Novice';
        vars.experience = 0;
        vars.exhaust = 0;

        this.el.html(NewGameView.template(vars));

        return this;
    },

    this.initialize = function() {
        this.el = $('<div/>');

    };
 
    this.initialize();
 
 }
NewGameView.template = Handlebars.compile($("#newGame-tpl").html());

