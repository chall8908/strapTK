var Icon = Panel.extend({
      initialize : function(args) {
        Icon.__super__.initialize.call(this, args);

        this.base = "icon";
        this.types = ICONLIST; // hopefully, this will keep memory down since I'm passing around a reference object

        Typify(this);
      },

      template : _.template("<i id='<%= rootID %>' class='<%= rootClasses %>' <%= rootAttrs %>></i> <%= yield %>")
    });

var ICONLIST = [
      "cloud-download", "cloud-upload", "lightbulb", "exchange", "bell-alt", "file-alt", "beer", "coffee", "food", "fighter-jet", "user-md", "stethoscope",
      "suitcase", "building", "hospital", "ambulance", "medkit", "h-sign", "plus-sign-alt", "spinner", "angle-left", "angle-right", "angle-up", "angle-down",
      "double-angle-left", "double-angle-right", "double-angle-up", "double-angle-down", "circle-blank", "circle", "desktop", "laptop", "tablet", "mobile-phone",
      "quote-left", "quote-right", "reply", "github-alt", "folder-close-alt", "folder-open-alt", "adjust", "asterisk", "ban-circle", "bar-chart", "barcode",
      "beaker", "beer", "bell", "bell-alt", "bolt", "book", "bookmark", "bookmark-empty", "briefcase", "bullhorn", "calendar", "camera", "camera-retro",
      "certificate", "check", "check-empty", "circle", "circle-blank", "cloud", "cloud-download", "cloud-upload", "coffee", "cog", "cogs", "comment", "comment-alt",
      "comments", "comments-alt", "credit-card", "dashboard", "desktop", "download", "download-alt", "edit", "envelope", "envelope-alt", "exchange",
      "exclamation-sign", "external-link", "eye-close", "eye-open", "facetime-video", "fighter-jet", "film", "filter", "fire", "flag", "folder-close",
      "folder-open", "folder-close-alt", "folder-open-alt", "food", "gift", "glass", "globe", "group", "hdd", "headphones", "heart", "heart-empty", "home",
      "inbox", "info-sign", "key", "leaf", "laptop", "legal", "lemon", "lightbulb", "lock", "unlock", "magic", "magnet", "map-marker", "minus", "minus-sign",
      "mobile-phone", "money", "move", "music", "off", "ok", "ok-circle", "ok-sign", "pencil", "picture", "plane", "plus", "plus-sign", "print", "pushpin",
      "qrcode", "question-sign", "quote-left", "quote-right", "random", "refresh", "remove", "remove-circle", "remove-sign", "reorder", "reply",
      "resize-horizontal", "resize-vertical", "retweet", "road", "rss", "screenshot", "search", "share", "share-alt", "shopping-cart", "signal", "signin",
      "signout", "sitemap", "sort", "sort-down", "sort-up", "spinner", "star", "star-empty", "star-half", "tablet", "tag", "tags", "tasks", "thumbs-down",
      "thumbs-up", "time", "tint", "trash", "trophy", "truck", "umbrella", "upload", "upload-alt", "user", "user-md", "volume-off", "volume-down", "volume-up",
      "warning-sign", "wrench", "zoom-in", "zoom-out", "file", "file-alt", "cut", "copy", "paste", "save", "undo", "repeat", "text-height", "text-width",
      "align-left", "align-center", "align-right", "align-justify", "indent-left", "indent-right", "font", "bold", "italic", "strikethrough", "underline", "link",
      "paper-clip", "columns", "table", "th-large", "th", "th-list", "list", "list-ol", "list-ul", "list-alt", "angle-left", "angle-right", "angle-up",
      "angle-down", "arrow-down", "arrow-left", "arrow-right", "arrow-up", "caret-down", "caret-left", "caret-right", "caret-up", "chevron-down", "chevron-left",
      "chevron-right", "chevron-up", "circle-arrow-down", "circle-arrow-left", "circle-arrow-right", "circle-arrow-up", "double-angle-left", "double-angle-right",
      "double-angle-up", "double-angle-down", "hand-down", "hand-left", "hand-right", "hand-up", "circle", "circle-blank", "play-circle", "play", "pause", "stop",
      "step-backward", "fast-backward", "backward", "forward", "fast-forward", "step-forward", "eject", "fullscreen", "resize-full", "resize-small", "phone",
      "phone-sign", "facebook", "facebook-sign", "twitter", "twitter-sign", "github", "github-alt", "github-sign", "linkedin", "linkedin-sign", "pinterest",
      "pinterest-sign", "google-plus", "google-plus-sign", "sign-blank", "ambulance", "beaker", "h-sign", "hospital", "medkit", "plus-sign-alt", "stethoscope",
      "user-md"
    ];