Router
	.configure({
	  layoutTemplate: "layout"
	})
	.map(function(){
  	this.route('home', {
  		waitOn: function() {
  			Meteor.subscribe('allPlaylists');
  		},
	    path: "/"
	  });
	  this.route('playlist', {
	  	waitOn: function() {
  			Meteor.subscribe('singlePlaylist', this.params._id);
  		},
  		data: function() {
  			return Playlists.findOne(this.params._id);
  		},
	  	path: "/:_id"
	  })
	});