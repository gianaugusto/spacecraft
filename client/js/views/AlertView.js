define([
    'jquery',
    'underscore',
    'backbone',
    
    'text!templates/alert.html'
], function (
    $,
    _,
    Backbone,

    template
) {

    var AlertView = Backbone.View.extend({

        el: $('article'),

        initialize: function (options) {
            this.type = options.type;
            this.message = options.message;

            this.$el.find('div.alert').remove();
        },

        render: function () {
            var data = { type: this.type, message: this.message },
                compilatedTemplate = _.template(template, data);
            
            $(this.el).prepend(compilatedTemplate);

            return this;
        }
    });

    return AlertView;
    
});