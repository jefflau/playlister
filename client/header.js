Template.header.helpers({

});

Template.header.events({
	'click #createPlaylist': function(e, template) {
		var playlist = {
			name: template.find('.playlist-title').value,
			items: [],
			dateCreated: new Date()
		};

		Meteor.call('createPlaylist', playlist, function (err, result) {
			if(err){
				console.error(err)
			} else {
				console.log('successfully created playlist!');
			}
		});
	}
});