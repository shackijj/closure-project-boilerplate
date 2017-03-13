goog.provide('project_name.start');

goog.require('goog.dom');

project_name.start = function() {
      var newDiv = goog.dom.createDom('h1', {'style': 'background-color:#EEE'},
                  'Hello world!');
        goog.dom.appendChild(document.body, newDiv);
};

// Ensures the symbol will be visible after compiler renaming.
goog.exportSymbol('project_name.start', project_name.start);
