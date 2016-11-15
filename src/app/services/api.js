export function ApiService($http) {

    this.getArtists = function(name) {
        return $http({
            method: 'GET',
            url: "https://api.spotify.com/v1/search?q=" + name + "&type=artist&limit=10"
        }).then(function(response) {
            return response.data.artists.items;
        }, function() {
            console.error('Error');
        });
    }

    this.getAlbums = function(id) {
        return $http({
            method: 'GET',
            url: "https://api.spotify.com/v1/artists/" + id + "/albums"
        }).then(function success(response) {
            return response.data.items;
        }, function error() {
            console.error('Error');
        });
    }

    this.getArtist = function(id) {
        return $http({
            method: 'GET',
            url: "https://api.spotify.com/v1/artists/" + id
        }).then(function success(response) {
            return response.data;
        }, function error() {
            console.error('Error');
        });
    }

    this.getTracks = function(id) {
        return $http({
            method: 'GET',
            url: "https://api.spotify.com/v1/albums/" + id + "/tracks"
        }).then(function success(response) {
            return response.data.items;
        }, function error() {
            console.error('Error');
        });
    }

    this.getAlbum = function(id) {
        return $http({
            method: 'GET',
            url: "https://api.spotify.com/v1/albums/" + id
        }).then(function success(response) {
            return response.data;
        }, function error() {
            console.error('Error');
        });
    }
}
