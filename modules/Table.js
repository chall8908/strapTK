/* Sprocket Manifest
 *= require Panel
 */
var Table = Panel.extend(
    /** @lends Table# */
    {
      initialize: function(args) {
        // Override devault value of body with an Array
        // If still set to a string, the render function
        // will fall back to older style of handling it
        this.setDefaultValue([], "head", "body", "foot");

        Table.__super__.initialize.call(this, args);

        // make sure all children are table rows
        if(this.children.length || _.isString(this.body)) {
          this.legacy = true;
          this.children = _.map(this.children, this.throwUnlessRow, this);
        } else {
          this.head = _.map(this.head, this.throwUnlessRow, this);
          this.body = _.map(this.body, this.throwUnlessRow, this);
          this.foot = _.map(this.foot, this.throwUnlessRow, this);
        }
      },

      push: function(row) {
        row = this.throwUnlessRow(row);
        this.children.push(row);
        return this;
      },

      unshift: function(row) {
        row = this.throwUnlessRow(row);
        this.children.unshift(row);
        return this;
      },

      insert: function(row, index) {
        row = this.throwUnlessRow(row);
        if(_.isNumber(index)) {
          this.children.splice(index, 0, row);
        } else {
          this.children.push(row);
        }
        return this;
      },

      pushTo: function(group, row) {
        row = this.throwUnlessRow(row);
        this[group].push(row);
        return this;
      },

      unshiftTo: function(group, row) {
        row = this.throwUnlessRow(row);
        this[group].unshift(row);
        return this;
      },

      insertInto: function(group, row, index) {
        row = this.throwUnlessRow(row);
        if(_.isNumber(index)) {
          this[group].splice(index, 0, row);
        } else {
          this[group].push(row);
        }
      },

      throwUnlessRow: function(row) {
        // this has the side effect of also building the renderable, if need be
        row = this.checkIfRenderable(row);
        if(
            row instanceof TableRow     ||
            row instanceof Source       ||
            (row.tag && _.include(["thead", "tfoot", "tbody"], row.tag))
          ) { return row; }

        throw new TypeError("Invalid child type: " + row.klass + ".  Must be either TableRow or Source.");
      },

      renderHash : function() {
        return  {
                  yield: (this.legacy ? this.body : "") + this.renderChildren(),
                  rootAttrs : this.listAttributes()
                };
      },

      renderChildren: function(prefix, suffix) {
        if(this.legacy) { //older style table
          return Table.__super__.renderChildren.call(this);
        }

        // HTML5 style table
        return new Component([
          strap({
            tag: 'thead',
            children: this.head
          }),
          strap({
            tag: 'tfoot',
            children: this.foot
          }),
          strap({
            tag: 'tbody',
            children: this.body
          })
        ]).render();
      },

      template: strap.generateSimpleTemplate("table")
    },
    /** @lends Table */
    {
      klass: "Table"
    });

    //aliases
Table.prototype.add = Table.prototype.push;
