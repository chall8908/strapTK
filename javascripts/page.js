var page = new Viewport({
  children: [
    new Panel({
      id: "header-wrapper",
      children: [
        new HeroUnit({
          id: "header",
          title: "Strap'd ToolKit",
          body: "An extensible framework for building HTML markup using Bootstrap, Font-Awesome, Lo-Dash, and jQuery.",
          children: [
            new NavBar({
              id: "header-nav",
              children: [
                new Panel({
                  id: "navbar-format",
                  children: [
                    new Link({
                      body: "Home",
                      id: "home-link",
                      classes: ["brand"],
                      href: "#home"
                    }),
                    new Nav({
                      divided: true,
                      id: "nav-tabs",
                      children: [
                        new Raw(""),
                        new Link({
                          body: "Get Strap'd",
                          id: "dl-link",
                          href: "../strapTK.min.js"
                        }),
                        new Link({
                          body: "API Docs",
                          id: "api-link",
                          href: "/docs/index.html"
                        }),
                        new Link({
                          body: "About",
                          id: "about-link",
                          href: "#about"
                        }),
                        new Raw("")
                      ]
                    })
                  ]
                })
              ]
            })
          ]
        })
      ]
    }),
    new Panel({
      id: "content-wrapper",
      classes: ["tab-content"],
      children: [
        new Panel({
          id: "home",
          classes: ["tab-pane", "fade", "in", "active"]
        }),
        new Panel({
          id: "api",
          classes: ["tab-pane", "fade", "in"]
        }),
        new Panel({
          id: "about",
          classes: ["tab-pane", "fade", "in"]
        })
      ]
    })
  ]
});

$(function() {
  page.render();
  home.render();
  api.render();
  about.render();

  $('#header-nav a').on("click", function(e) {
    e.preventDefault();
    $(this).tab("show");
    if($(this).is("#home-link")) {
      $("#nav-tabs .active").removeClass("active");
    }
  });
});