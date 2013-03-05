var Nav = List.extend({
  initialize: function(args) {
    Nav.__super__.initialize.call(this, args);

    if(!this.hasOwnProperty("divided")) {
      this.divided = false;
    }

    this.childPrefix = "<li>";
    this.childSuffix = "</li>";
    this.types = ["tabs", "pills", "list"];
    this.base = "nav";
    Typify(this);
  },

  renderChildren : function(prefix, suffix) {
    prefix || (prefix = this.childPrefix); suffix || (suffix = this.childSuffix);

    var markup = "";
    _.each(this.children, function(child) {
      markup += (child.active ? prefix.replace(/>$/," class='active'>") : prefix) + child.render() + suffix;
    });
    return markup;
  },

  render : function() {
    var markup = Nav.__super__.render.call(this);
    if(this.divided) {
      markup = markup.split("</li><li").join("</li><li class='divider-vertical'></li><li");
    }
    return markup
  },

  divide : function(divided) {
    if(divided) {
      this.divided = true;
    } else if(divided === false) {
      this.divided = false;
    }

    return this.divided;
  }
});