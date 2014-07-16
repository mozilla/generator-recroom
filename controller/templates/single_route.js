<%= _.classify(appname) %>.<%= _.classify(name) %>Route = Ember.Route.extend({<% if (!singlePage) { %>
    model: function(params) {
        return this.get('store').find('<%= _.slugify(name) %>',
                                      params.<%= _.slugify(name) %>_id);
    }
<% } %>});
