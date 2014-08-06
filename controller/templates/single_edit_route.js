App.<%= _.classify(name) %>EditRoute = Ember.Route.extend({
    model: function(params) {
        return this.get('store').find('<%= _.slugify(name) %>',
                                      this.modelFor('<%= _.slugify(name)%>').id);
    },
    setupController: function(controller, model) {
        controller.set('model', model);
    }
});
