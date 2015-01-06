var MapView = function(load) {
    this.render = function() {
        this.el.html(MapView.template());
        return this;
    },

    this.initialize = function() {
        this.el = $('<div/>');
    };
 
    this.initialize();
 
 }
 
MapView.template = Handlebars.compile($("#map-tpl").html());