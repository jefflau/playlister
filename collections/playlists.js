Playlists = new Meteor.Collection('playlists');

Meteor.methods({
	'createPlaylist': function(playlist) {
		return Playlists.insert(playlist); //return id
	},

	'addPlaylistItem': function(item, id){
		return Playlists.update({_id: id}, {$push: {items: item}});
	}
});