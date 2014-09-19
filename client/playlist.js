Template.playlist.helpers({

});

Template.playlist.events({
	'submit form': function(e, template) {
		e.preventDefault();
		var item = {
			link: template.find('.new-playlist-link').value,
		}
		Meteor.call('addPlaylistItem', item, Router.current().params._id, function (err, result) {
			if(err)
				console.error(err);
		});
	}
});