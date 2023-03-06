document.write(
	"<!-- navbar -->" +
	"<div class='navbar navbar-default navbar-static-top' role='navigation'>" +
		"<div class='container'>" +
			"<div class='navbar-header'>" +
				"<button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>" +
				"<span class='sr-only'>Toggle navigation</span>" +
				"<span class='icon-bar'></span>" +
				"<span class='icon-bar'></span>" +
				"<span class='icon-bar'></span>" +
				"</button>" +
				"<a class='navbar-brand' href='/' title='www.osburn.com'>Home</a>" +
			"</div>" +
			"<div class='navbar-collapse collapse'>" +
                                "<ul class='nav navbar-nav'>" +
                                        "<li class='dropdown'>" +
                                                "<a href='#' class='dropdown-toggle' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>Work<span class='caret'></span></a>" +
                                                "<ul class='dropdown-menu'>" +
                                                "<li><a href='/resume.html'>My Resume</a></li>" +
                                                "</ul>"  +
                                        "</li>"  +
                                "</ul>" +
                                "<ul class='nav navbar-nav'>" +
                                        "<li class='dropdown'>" +
                                                "<a href='#' class='dropdown-toggle' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>Photos<span class='caret'></span></a>" +
                                                "<ul class='dropdown-menu'>" +
                                                "<li><a href='/stream'>My Photostream</a></li>" +
                                                "<li><a href='/stream/rss.php'>My Photostream RSS feed</a></li>" +
                                                "<li role='separator' class='divider'></li>" +
                                                "<li><a href='/photos'>Public Photos</a></li>" +
                                                "<li role='separator' class='divider'></li>" +
                                                "<li><a href='/private'>Private photos (Auth Required)</a></li>" +
                                                "</ul>"  +
                                        "</li>"  +
                                "</ul>" +

				"<ul class='nav navbar-nav'>" +
					"<li>" +
						"<a href='/whoiam.html'>Who Am I</a>" +
					"</li>" +
					"<li>" +
						"<a href='/gpg.html'>GPG</a>" +
					"</li>" +
					"<li>" +
						"<a href='/amateurradio/'>Amateur Radio</a>" +
					"</li>" +
					"<li>" +
						"<a href='/links.html'>Links</a>" +
					"</li>" +

					"<li class='dropdown'>" +
						"<a href='#' class='dropdown-toggle' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>Stuff<span class='caret'></span></a>" +
						"<ul class='dropdown-menu'>" +
						"<li><a href='/jst'>Jared Samuel Townsley</a></li>" +
						"<li role='separator' class='divider'></li>" +
						"<li><a href='/osburn-links.html'>Osburn Companies & People.</a></li>" +
						"<li><a href='/theconstitution.html'>The Constitution</a></li>" +
						"</ul>"  +
					"</li>"  +

				"</ul>" +
			"</div><!--/.nav-collapse -->" +
		"</div>" +
	"</div>" +
	"<!-- /navbar -->"
);
