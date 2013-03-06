var about = new Viewport({root: "#content-wrapper"});
(function() {
  var wrapper = new Panel({
      id: "main"
    }),
    content = new Panel({
      id: "content",
      classes: ["well"],
      children: [
        new PageHeader({
          header: "About Strap'd",
          level: 2,
          body: "That <em>is</em> why you clicked the 'About' tab, right?"
        }),
        new HR(),
        new P({
          body: "Strap'd was envisioned as a lightweight rapid prototyping library.  We needed a way to speed up our development time especially in the prototyping stage.  Over an afternoon, my coworkers and I stood around a whiteboard writing out what we wanted in our 'Widget Toolkit'.  The HTML building elements hit the board almost immediately.  Followed swiftly by a suggestion from my boss for 'Data Sourcing', or connecting widgets to RESTful web APIs or even other widgets as a means of automatically gathering and displaying data.  We were gearing up for a pretty major web app and this seemed like a pretty good idea to all of us."
        }),
        new P({
          body: "A few extra details went in here and there - drag and drop support, graphing - but we already had what we, ultimately, needed.  We defined our MVP with just the HTML building parts and we set out to get it started."
        }),
        new HR(),
        new PageHeader({
          header: "Behind the Curtain",
          level: 2,
          body: "The people and products that made Strap'd possible"
        }),
        new HR(),
        new PageHeader({
          header: "Chris Hall",
          level: 3,
          body: "Lead Developer"
        }),
        new Nav({
          type: "pills",
          children: [
            new Link({
              body: "GitHub",
              attributes: ["href='https://github.com/chall8908'"]
            })
          ]
        }),
        new P({
          body: "This is me!  The enigmatic first-person pronoun you see floating around refers to this guy.  I've been in web development since I graduated from high school in 2007.  My first major project was a web based MMORTS with a friend (and now coworker) I met on the internet.  The game was a flop, but it propelled me into the career I have today."
        }),
        new HR(),
        new PageHeader({
          header: "Bryan Zettler",
          level: 3,
          body: "HTML/HAML templates"
        }),
        new Nav({
          type: "pills",
          children: [
            new Link({
              body: "GitHub",
              attributes: ["href='https://github.com/BryIsAZombie'"]
            })
          ]
        }),
        new P({
          body: "Bryan was brought on very early on (read: day 1) to help get all the templates written and generally be knowledgable about Bootstrap and FontAwesome.  He helped with a lot of the initial set up and, without him, this project probably wouldn't have gotten off the ground nearly as fast as it did."
        }),
        new HR(),
        new PageHeader({
          header: "Chris Rankin",
          level: 3,
          body: "Project Management and general Ass Kickery"
        }),
        new Nav({
          type: "pills",
          children: [
            new Link({
              body: "GitHub",
              attributes: ["href='https://github.com/rankin'"]
            })
          ]
        }),
        new P({
          body: "Strap'd is, ultimately, the brain-child of this man.  It was Chris' idea to build this toolkit originally and I was designated as the best person we had to make it.  He helped lay out the original design and kicked my ass into getting it done ASAP.  He helped me talk through problems and design solutions and, without him, Strap'd wouldn't exist."
        }),
        new HR(),
        new PageHeader({
          header: "The jQuery Team",
          level: 3,
          body: "Developing a sweet DOM manipulation library"
        }),
        new Nav({
          type: "pills",
          children: [
            new Link({
              body: "Website",
              attributes: ["href='http://jquery.com/'"]
            }),
            new Link({
              body: "GitHub",
              attributes: ["href='http://github.com/jquery/jquery'"]
            })
          ]
        }),
        new P({
          body: "If you've never heard of jQuery, I'd love to know what rock you live under.  Responsible for what is, arguably, the best and most widely known DOM manipulation library in existance, they've been making my life, and lives of countless other developers, easier since before I was developing for the web."
        }),
        new HR(),
        new PageHeader({
          header: "The Lo-Dash Team",
          level: 3,
          body: "Developing a nice utility library for working with Javascript Objects"
        }),
        new Nav({
          type: "pills",
          children: [
            new Link({
              body: "Website",
              attributes: ["href='http://lodash.com/'"]
            }),
            new Link({
              body: "GitHub",
              attributes: ["href='https://github.com/bestiejs/lodash'"]
            })
          ]
        }),
        new P({
          body: "I found the Lo-Dash library when I first started working with Backbone.  I never got far with Backbone, but Lo-Dash made quite an impression on me.  Aside from my usual JS work, I deal with a lot of Ruby code and Lo-Dash felt very Ruby-ish to me with its chaining syntax.  I've always liked code that reads like what it does and Lo-Dash helps me do that."
        }),
        new HR(),
        new PageHeader({
          header: "The Bootstrap Team",
          level: 3,
          body: "Developing a responsive design framework that looks damn sexy"
        }),
        new Nav({
          type: "pills",
          children: [
            new Link({
              body: "Website",
              attributes: ["href='http://twitter.github.com/bootstrap/index.html'"]
            }),
            new Link({
              body: "GitHub",
              attributes: ["href='https://github.com/twitter/bootstrap'"]
            })
          ]
        }),
        new P({
          body: "Really, Bootstrap should be higher up on the list of 'things that make Strap'd possible'.  Strap'd was designed to make building websites with Bootstrap as easy as possible so, obviously, none of this would be possible without it.  These guys built an amazing piece of software and I'm actually rather upset that it took me so long to find it.  If you've never worked with Bootstrap before, I strongly recommend giving it a shot even if you decide not to use Strap'd."
        }),
        new HR(),
        new PageHeader({
          header: "The FontAwesome Team",
          level: 3,
          body: "Developing an awesome icon pack that just works"
        }),
        new Nav({
          type: "pills",
          children: [
            new Link({
              body: "Website",
              attributes: ["href='http://fortawesome.github.com/Font-Awesome/'"]
            }),
            new Link({
              body: "GitHub",
              attributes: ["href='https://github.com/FortAwesome/Font-Awesome'"]
            })
          ]
        }),
        new P({
          body: "FontAwesome is an icon pack designed for use with Bootstrap.  You don't have to use it with Bootstrap, but the two complement each other perfectly.  FontAwesome uses vector graphics that scale pretty much forever and, when possible, uses a custom font to provide the icons.  This lets you do really cool things like apply custom colors or use text shadows on them.  Things that using images just wouldn't let you do.  All in all, I feel FontAwesome is pretty damn awesome. ",
          children: [
            new Icon({
              type: "thumbs-up",
              attributes: ["title='The ironic thing is that this icon is from Glyphicon originally.'"]
            })
          ]
        }),
        new HR(),
        new PageHeader({
          header: "The Backbone Team",
          level: 3,
          body: "Developing an easily extensible framework"
        }),
        new Nav({
          type: "pills",
          children: [
            new Link({
              body: "Website",
              attributes: ["href='http://backbonejs.org/'"]
            }),
            new Link({
              body: "GitHub",
              attributes: ["href='https://github.com/documentcloud/backbone/'"]
            })
          ]
        }),
        new P({
          body: "Strap'd doesn't directly use Backbone for anything.  However, the extend function written for Backbone was unceremoniously torn from its chest and transplanted into Strap'd.  It was so well written, I didn't even have to modify it from its original form to get it working flawlessly.  So, to the Backbone team, sorry for ripping off your hard work and thank you for being way smarter than I am."
        })
      ]
    });

  wrapper.add(content);
  about.add(wrapper);
})();