goog.provide('org.pubref.App');
goog.provide('org.pubref.main');

goog.require('goog.events.EventTarget');


/**
 * Demo App implementation.  Extends from EventTarget to use a uniform
 * event mechanism.
 *
 * @constructor
 * @struct
 * @extends {goog.events.EventTarget}
 */
org.pubref.App = function() {
  goog.base(this);

  /** @private @type {string} */
  this.version_ = '0.1';

};
goog.inherits(org.pubref.App, goog.events.EventTarget);



/**
 * @public
 * @return {string}
 */
org.pubref.App.prototype.getVersion = function() {
  return this.version_;
};


/**
 * This is the main entry point into the app.
 * @public
 */
org.pubref.main = function() {
  var app = new org.pubref.App();
  console.log(app.getVersion());
};

goog.exportSymbol('org.pubref.main', org.pubref.main);
