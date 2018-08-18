/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'FirstExtJSApp.Application',

    name: 'FirstExtJSApp',

    requires: [
        // This will automatically load all classes in the FirstExtJSApp namespace
        // so that application classes do not need to require each other.
        'FirstExtJSApp.*'
    ],

    // The name of the initial view to create.
    mainView: 'FirstExtJSApp.view.main.Main'
});
