App.<%= _.classify(name) %>EditController = Ember.ObjectController.extend({
    needs: '<%= name.toLowerCase() %>',
    actions: {
        save: function() {
            var _this = this;
            this.get('buffer').forEach(function(attr) {
                _this.get('controllers.<%=name.toLowerCase()%>.model')
                     .set(attr.key, attr.value);
            });
            this.transitionToRoute('<%=name.toLowerCase()%>',this.get('model'));
        }
    }
});
