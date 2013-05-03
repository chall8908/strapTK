/* Sprocket Manifest
 *= require Link
 *= require Typify
 */
var Button = Link.extend(
    /** @lends Button# */
    {
      initialize : function(args) {
        Button.__super__.initialize.call(this, args);

        this.attributes.unshift("type='button'");

        this.base = "btn";

        Typify(this);
      }
    },
    /** @lends Button */
    {
      klass: "Button",
      types: ["primary", "secondary", "info", "success", "warning", "danger", "inverse", "link"]
    });