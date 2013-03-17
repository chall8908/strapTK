/**
 * The strap object contains a set of global functions that apply to the
 *  entire page (e.g. setting all elements as draggable)
 */
var strap = (function() {
      this.allDraggable = function(draggable) {
        if(draggable === true) {
          $("body").find("*").attr("draggable", "true")
        } else if(draggable === false) {
          $("body").find("*").removeAttr("draggable")
        }
      }
    })();
/**
 * Global Extend function for creating subclasses
 * Unceremoniously ripped out of Backbone.js.  Those guys are way smarter than I am.
 * You should go check out their work too: http://backbonejs.org
 *
 * The only modification made to this function is to add 'parent' as an argument instead
 *  of having the function be added to an object.
 *
 * @param parent [Object] the object to be extended
 * @param protoProps [Object] the properties to add to the new object's prototype
 * @param staticProps [Object] the properties to add to the new object's constructor
 *
 * @return the extended object
 */
// Function to correctly set up the prototype chain, for subclasses.
// Similar to `goog.inherits`, but uses a hash of prototype properties and
// class properties to be extended.
function Extend(parent, protoProps, staticProps) {
  var child;

  // The constructor function for the new subclass is either defined by you
  // (the "constructor" property in your `extend` definition), or defaulted
  // by us to simply call the parent's constructor.
  if (protoProps && _.has(protoProps, 'constructor')) {
    child = protoProps.constructor;
  } else {
    child = function(){ return parent.apply(this, arguments); };
  }

  // Add static properties to the constructor function, if supplied.
  _.extend(child, parent, staticProps);

  // Set the prototype chain to inherit from `parent`, without calling
  // `parent`'s constructor function.
  var Surrogate = function(){ this.constructor = child; };
  Surrogate.prototype = parent.prototype;
  child.prototype = new Surrogate;

  // Add prototype properties (instance properties) to the subclass,
  // if supplied.
  if (protoProps) _.extend(child.prototype, protoProps);

  // Set a convenience property in case the parent's prototype is needed
  // later.
  child.__super__ = parent.prototype;

  return child;
}

/**
 * Decorates the given component with the necessary variables and methods to handle being typed
 *  A typed object is one that has a "base" and is then further modified with a "type".
 *  E.G. An alert can be an "error" message (and have a "type" of "error")
 *
 * This method does not overwrite any variables set on the decorated component unless it
 *  already has a setType property (which it shouldn't >:[)
 *
 * @param component [Component] the Component to be decorated
 * @param options   [Object]    Optional.  The settings for this typed Component
 *
 * @throws TypeError if component is not an instance or subclass of Component
 */
function Typify(component, options) {
  if(!(component instanceof Component)) {
    throw TypeError("Typify can only operate on Components");
  }
  
  options = _.extend({}, Typify.defaults, options);

  component.setType = function(type) {
    if(this.type) {
      this.removeClass(this.base+"-"+this.type);
      delete this.type;
    }
    if(type) {
      if(!_.include(this.types, type)) {
        throw new RangeError("Invalid type - "+type);
      }
      this.type = type;
      this.addClass(this.base+"-"+type);
    }
  };

  component.types || (component.types = options.types);
  component.base || (component.base = options.base);
  component.type || (component.type = options.type);

  if(component.base) {
    component.addClass(component.base);
  }

  if(component.type) {
    component.setType(component.type);
  }
}

Typify.defaults = {
  types: [],
  base: "",
  type: ""
}

/**
 * Source adds data sources to Components.
 * This allows them to gather data from a remote API via AJAX or Websockets
 * 
 * Specifying a source URL with the websocket protocol (ws:// or wss://) will force
 *  the source to always be gathered via websocket.  If a websocket connection is not
 *  available, a WebsocketConnectError will be thrown.  Of note, this process will
 *  fall back to HTTP protocol before throwing an error.
 *
 * Sourced Components MUST specify a callback to handle the data returned by the server
 *  before calling the sync() method.  Failure to do so will result in an error.
 *
 * @param component [Component] the Component to add sourcing to
 * @param options   [Object]    Optional.  The settings for this Sourced Component
 *
 * @throws TypeError if component is not an instance or subclass of Component
 */
 function Source(component, options) {
   if(!(component instanceof Component)) {
    throw TypeError("Source can only operate on Components");
  }
  
  options || (options = {});
  
  component.sync = function() {
    
  }
  
  //set up data sourcing options
  
  component.fetcher = new Fetcher(component);
 }
 
 /**
  * Creates an XMLHTTPRequest or Websocket object
  *
  * @param component [Component] the parent object of this Fetcher
  */
 function Fetcher(component) {
   var p = this.parent = component;
 }