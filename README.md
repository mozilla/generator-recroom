# recroom Yeoman Generator [![Build Status](https://travis-ci.org/mozilla/generator-recroom.svg?branch=master)](https://travis-ci.org/mozilla/generator-recroom)

A Yeoman Generator for building [recroom][recroom] apps based on the [Yeoman Ember.js Generator][ember-generator].

[recroom]: https://github.com/mozilla/recroom
[ember-generator]: https://github.com/yeoman/generator-ember
[introducing-recroom]: https://hacks.mozilla.org/2014/08/time-to-get-hacking-introducing-rec-room/

While this generator was built as part of a larger recroom toolkit, it can also be used on its own as a standard Yeoman generator. For more information on creating recroom apps, see [Time To Get Hacking: Introducing Rec Room][introducing-recroom]. If you'd like to use this generator on its own, install it via npm:

```bash
npm install generator-recroom
```

Create and `cd` into a new directory:
```bash
mkdir new-recroom-app && cd $_
```

Create a new recroom app:
```bash
yo recroom your-app-name
```


##Generators
###Controller
```bash
yo recroom:controller controllerName
```

Creates:

    app/scripts/controllers/controllerName_controller.js
    app/scripts/controllers/controllerName_edit_controller.js
    app/scripts/controllers/controllerNamePlural_controller.js
    app/scripts/routes/controllerName_route.js
    app/scripts/routes/controllerName_edit_route.js
    app/scripts/routes/controllerNamePlural_route.js
    app/templates/controllerName.hbs
    app/templates/controllerName/edit.hbs
    app/templates/controllerNamePlural.hbs
    app/scrips/views/controllerName_view.js
    app/scripts/views/controllerName_edit_view.js
    app/scripts/views/controllerNamePlural_view.js


###Page
```bash
yo recroom:page pageName
```

Creates:

    app/scripts/controllers/pageName_controller.js
    app/scripts/routes/pageName_route.js
    app/templates/pageName.hbs
    app/scripts/views/pageName_view.js


###Model
```bash
yo recroom:model modelName
```

Creates:

    app/scripts/controllers/modelName_controller.js
    app/scripts/controllers/modelName_edit_controller.js
    app/scripts/controllers/modelNamePlural_controller.js
    app/scripts/models/modelName_model.js
    app/scripts/routes/modelName_route.js
    app/scripts/routes/modelNamePlural_route.js
    app/scripts/routes/modelName_edit_route.js
    app/templates/modelName.hbs
    app/templates/modelName/edit.hbs
    app/templates/modelNamePlural.hbs
    app/scripts/views/modelName_view.js
    app/scripts/views/modelName_edit_view.js
    app/scripts/views/modelNamePlural_view.js


###View
```bash
yo recroom:view viewName
```

Creates:

    app/scripts/views/viewName_view.js
    app/templates/viewName.hbs
    app/scripts/views/viewName_edit_view.js
    app/scripts/views/viewNamePlural_view.js
    app/templates/viewName/edit.hbs
    app/templates/viewNamePlural.hbs


##Grunt Tasks
The default grunt task will run jshint, test and build.

* `serve` - Serves your app on port 9000 and will livereload when changes are made
* `test` - Runs any unit tests with mocha & chai
* `build` - Compiles the distributable build of your app to the `dist/` folder
* `deploy` - Builds and deploys your app to github pages


##App Structure
The base skeleton of your application will look something like this:

    ├── app
    │   ├── bower_components    - Bower dependencies
    │   ├── images              - Custom image assets/icons
    │   ├── scripts             - App-specific MVC components
    │   │   └── controllers
    │   │   └── models
    │   │   └── routes
    │   │   └── views
    │   ├── styles
    │   │   └── app.scss        - SASS file for app styles
    │   │   └── normalize.css   - CSS file for cross-browser consistency
    │   ├── templates           - Handlebars app templates
    │   │   └── application.hbs - Base application template
    │   │   └── index.hbs       - Root template content
    │   ├── index.html          - Index file pulling content from application.hbs
    │   ├── manifest.webapp     - App manifest
    │
    ├── dist                    - Distributable build of the app
    │
    └── test
        ├── spec                - Mocha/Chai unit test scripts
        ├── index.html          - Mocha Spec Runner page


## Folder Structure
**TODO**: Add missing folders.

<dl>
    <dt><code>app</code></dt>
    <dd>
        The folder structure output by `recroom new` (`yo recroom`).
        Contains basic folder structure, package manifests, and
        `application.hbs` and `index.html`, where your application's base
        templates live. Also includes a `Gruntfile.js` that contains most
        of the build tasks for your Rec Room app.
    </dd>
    <dt><code>controller</code></dt>
    <dd>
        Contains all Ember controller templates, both for simple `page`
        scaffolds and more complicated `model` scaffolds (eg. single/plural
        controllers, and edit controllers).
    </dd>
</dl>
