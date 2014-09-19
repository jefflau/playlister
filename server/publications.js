Meteor.publish('allPlaylists', function(){
	return Playlists.find();
});

Meteor.publish('singlePlaylist', function(id){
	return id && Playlists.find(id);
});