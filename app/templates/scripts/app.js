FxosUI = window.FxosUI = Ember.Namespace.create();

var _ = window.document.webL10n.get;

Handlebars.registerHelper('trans', function() {
    var variables = {};

    if (arguments.length > 1) {
        for (var i = 1; i <= arguments.length; i += 2) {
            if (arguments.hasOwnProperty(i)) {
                variables[arguments[i]] = arguments[i + 1];
            }
        }
    }

    return new Handlebars.SafeString(_(arguments[0], variables));
});

window.addEventListener('localized', function() {
    var <%= _.classify(appname) %> = window.<%= _.classify(appname) %> = Ember.Application.create();

    // Order and include as you please.
    require('scripts/controllers/*');
    require('scripts/store');
    require('scripts/models/*');
    require('scripts/routes/*');
    require('scripts/views/*');
    require('scripts/router');
    require('/bower_components/fxos-ui/scripts/components/*');
});
