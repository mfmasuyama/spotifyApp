export function ApiService($http) {

    this.getArtists = function(name) {
        return $http({
            method: 'GET',
            url: "https://api.spotify.com/v1/search?q=" + name + "&type=artist&limit=10"
        }).then(function(response) {
            return response.data.artists;
        }, function() {
            console.error('Error');
        });
    }

    this.getAlbums = function(id) {
        return $http({
            method: 'GET',
            url: "https://api.spotify.com/v1/artists/"+id+"/albums"
        }).then(function success(response) {
            console.log( response.data);
        }, function error() {
            console.error('Error');
        });
    }
}
