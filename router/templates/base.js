<%= _.classify(appname) %>.Router.map(function () {
    /*#--- Rec Room Router Hook — DO NOT MODIFY ---#*/
<% _.each(models, function(model, i) { %>
    this.resource('<%= model.plural %>');
    this.resource('<%= model.single %>.new', {path: '/<%= model.single %>/new'});
    this.resource('<%= model.single %>', {path: '/:<%= model.single %>_id' }, function() {
        this.route('edit');
    });
    this.route('create');
<% }); %>
});
