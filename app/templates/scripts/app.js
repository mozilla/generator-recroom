var FxosUI = window.FxosUI = Ember.Namespace.create();

var <%= _.classify(appname) %> = window.<%= _.classify(appname) %> = Ember.Application.create();

// Order and include as you please.
require('scripts/l10n/*');
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/views/*');
require('scripts/router');
