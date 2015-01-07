var GameView = function() {
    this.render = function(store) {

        var vars = 
        {
            status : window.location.hash.match(/[A-z]{1,}/)
        };
        
        vars.nickName = store.variables[0]['nickName'];
        vars.lvl = store.variables[0]['lvl'];
        vars.money = store.variables[0]['money'];
        vars.titre = store.variables[0]['title'];
        vars.experience = store.variables[0]['experience'];
        vars.exhaust = store.variables[0]['fatigue'];

        this.el.html(GameView.template(vars));

        return this;
    },

    this.initialize = function() {
        this.el = $('<div/>');

    };
 
    this.initialize();
 
 }
GameView.template = Handlebars.compile($("#game-tpl").html());

