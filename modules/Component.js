/**
 * @class Components are generic objects that can add and remove children and render themselves
 * @extends Base
 *
 * @property {String[]} children    This component's children.
 * @property {String}   childPrefix The string to prepend to each child's rendered markup.
 * @property {String}   childSuffix The string to append to each child's rendered markup.
 */
var Component = Base.extend(
    /**
     * @lends Component#
     */
    {
      /**
       * Initializes Components with default values and performs sanity checks
       *
       * @param {Object} [args] Additional arguments (currently unused)
       */
      initialize : function(args) {

        this.setDefaultValue([], "children");

        _.each(this.children, this.checkIfRenderable);

        this.setDefaultValue("", "childPrefix", "childSuffix");

        this.klass = this.constructor.klass;
      },

      /**
       * Sets the value of a field, if and only if it hasn't been defined on this object.
       * That is, it defines the value if Object.field was set on this Object and not in this Object's prototype chain.
       *
       * This method accepts a variable number of attibutes.
       * E.G.
       * <code>this.setDefaultValue("", "childPrefix", "childSuffix")</code>
       *
       * @param value The value to assign
       * @param {String} attribute The key to assign a value.
       *
       * @example
       * this.setDefaultValue("", "childPrefix", "childSuffix");
       */
      setDefaultValue: function(value, attribute) {
        var args = Array.prototype.slice.call(arguments, 1),      // get the list of attributes to apply the value to
            method = _.isArray(value) ? "apply" : "call";         // determine which Function prototype method to call

        _.each(args, function(attr) {
          if(!this.hasOwnProperty(attr)) {                        // set value only if it's not already set
            this[attr] = value.constructor[method](this, value);  // clone value by calling its constructor function
          }
        }, this);
      },

      /**
       * Used to compile the markup for this Component.
       *  By default, Components only return the yield field in the supplied args
       *
       * Subclasses of Component should override template to provide proper markup
       *
       * @param {Object} args       The arguments used to build this Component's markup
       * @param {String} args.yield The body and compiled children of this Component
       *
       * @returns {String} Returns args.yield
       */
      template : function(args) {
        return args.yield;
      },

      /**
       * Adds a child object to the end of the list of children
       * This function is chainable
       *
       * @param {Component} component The component to add to this Component's list of children
       *
       * @returns {Component} returns this
       *
       * @throws {TypeError} if the supplied component doesn't respond to #render
       */
      push : function(component) {
        this.checkIfRenderable(component);
        this.children.push(component);
        return this;
      },

      /**
       * Removes the last child from the list of children
       *
       * @returns {Component} The removed child
       */
      pop : function() {
        return this.children.pop();
      },

      /**
       * Adds a child to the beginning of the list of children
       * This function is chainable
       *
       * @param {Component} component The component to add to this Component's list of children
       *
       * @returns {Component} returns this
       *
       * @throws {TypeError} If the supplied component doesn't respond to #render
       */
      unshift : function(component) {
        this.checkIfRenderable(component);
        this.children.unshift(component);
        return this;
      },

      /**
       * Removes the first child from the list of children
       *
       * @returns {Component} The removed child
       */
      shift : function() {
        return this.children.shift();
      },

      /**
       * Adds a child at the specified index to the list of children
       * If no index is given, functions as {@link Component#push}
       * This function is chainable
       *
       * @param {Component} component The component to add to this Component's list of children
       * @param {Integer}   [index]   The index at which to add the child
       */
      insert : function(component, index) {
        this.checkIfRenderable(component);
        if(index) {
          this.children.splice(index, 0, component);
        } else {
          this.children.push(component);
        }

        return this;
      },

      /**
       * Gets the child at the given index or the field with the given key
       *
       * @param {String|Integer} index  The index of the child or key of the field to return
       *
       * @returns The child at the given index or the value of the given key
       *
       * @throws {TypeError} If index is not a string or integer
       */
      get : function(index) {
        switch(typeof(index)) {
          case "string":
            return this[index];

          case "number":
            return this.children[index];
        }

        throw TypeError("index must be a string or number.");
      },

      /**
       * Removes the child at the given index
       * if no index is given, functions as {@link Component#pop}
       *
       * @param {Integer} [index] The index of the child to be removed
       *
       * @returns {Component} The component at the given index
       */
      remove : function(index) {
        if(index) {
          return this.children.splice(index, 1)[0];
        }
        return this.pop();
      },

      /**
       * Checks if the given object is renderable
       * That is, if it has a method named render.
       *
       * @param {Object} renderable The object to check
       *
       * @throws {TypeError} If the given object is not renderable
       */
      checkIfRenderable : function(renderable) {
        if(typeof(renderable.render) === "function") {
          return;
        }

        throw TypeError("Object does not respond to render.")
      },

      /**
       * Renders this components children
       *
       * @param {String} [prefix=this.childPrefix] the string to prepend to each child's markup
       * @param {String} [suffix=this.childSuffix] the string to append to each child's markup
       *
       * @returns {String} The compiled markup of this Component's children
       */
      renderChildren : function(prefix, suffix) {
        prefix || (prefix = this.childPrefix); suffix || (suffix = this.childSuffix);

        var markup = "";
        _.each(this.children, function(child) {
          markup += prefix + child.render() + suffix;
        });
        return markup;
      },

      /**
       * Compiles all the markup for this component.
       *
       * @returns {String} The compiled markup for this component
       * @see Component#renderChildren
       */
      render : function() {
        return this.template({"yield": this.renderChildren()});
      },

      /**
       * Calls Component#render or stringifies to JSON
       *
       * @param {Boolean} asJSON  If this method should return the output of render or JSON#stringify
       *
       * @returns {String}
       */
      toString : function(asJSON) {
        return asJSON ? JSON.stringify(this) : this.render();
      },

      /**
       * Create a deep clone of this Component
       *
       * @returns {Component} a deep clone of this component
       */
      clone : function() {
        return strap.build(this.toString(true));
      }

    },
    /** @lends Component */
    {
      /** Used in serialization and deserialization */
      klass : "Component"
    });

//aliases
/**
 * @function
 * @see Component#push
 */
Component.prototype.add = Component.prototype.push;