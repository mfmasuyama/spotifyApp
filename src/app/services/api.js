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

    this.orderUp = function(tracks) {
        return tracks.sort(compareUp);
    }

    this.orderDown = function(tracks) {
        return tracks.sort(compareDown);
    }

    function compareDown(a,b) {
        if (a.duration_ms < b.duration_ms) {
            return -1;
        }
        if (a.duration_ms > b.duration_ms) {
            return 1;
        }
        return 0;
    }

    function compareUp(a,b) {
        if (a.duration_ms > b.duration_ms) {
            return -1;
        }
        if (a.duration_ms < b.duration_ms) {
            return 1;
        }
        return 0;
    }
    
}
