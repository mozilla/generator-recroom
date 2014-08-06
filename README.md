# recroom Yeoman Generator [![Build Status](https://travis-ci.org/mozilla/generator-recroom.svg?branch=master)](https://travis-ci.org/mozilla/generator-recroom)

Based on [Yeoman Ember.js Generator][ember-generator].

[ember-generator]: https://github.com/yeoman/generator-ember

## Folder Structure

**TODO**: Add missing folders.

<dl>
    <dt>`app/`</dt>
    <dd>
        The folder structure output by `recroom new` (`yo recroom`).
        Contains basic folder structure, package manifests, and
        `application.hbs` and `index.html`, where your application's base
        templates live. Also includes a `Gruntfile.js` that contains most
        of the build tasks for your Rec Room app.
    </dd>
    <dt>`controller`</dt>
    <dd>
        Contains all Ember controller templates, both for simple `page`
        scaffolds and more complicated `model` scaffolds (eg. single/plural
        controllers, and edit controllers).
    </dd>
</dl>
