export default class {

    constructor($http) {
      this.http = $http;
    }

    getArtists(name) {
        return this.http({
            method: 'GET',
            url: "https://api.spotify.com/v1/search?q=" + name + "&type=artist&limit=10"
        }).then(function(response) {
            return response.data.artists.items;
        }.bind(this), function() {
            console.error('Error');
        });
    }

    getAlbums(id) {
        return this.http({
            method: 'GET',
            url: "https://api.spotify.com/v1/artists/" + id + "/albums"
        }).then(function success(response) {
            return response.data.items;
        }.bind(this), function error() {
            console.error('Error');
        });
    }

    getArtist(id) {
        return this.http({
            method: 'GET',
            url: "https://api.spotify.com/v1/artists/" + id
        }).then(function success(response) {
            return response.data;
        }.bind(this), function error() {
            console.error('Error');
        });
    }

    getTracks(id) {
        return this.http({
            method: 'GET',
            url: "https://api.spotify.com/v1/albums/" + id + "/tracks"
        }).then(function success(response) {
            return response.data.items;
        }.bind(this), function error() {
            console.error('Error');
        });
    }

    getAlbum(id) {
        return this.http({
            method: 'GET',
            url: "https://api.spotify.com/v1/albums/" + id
        }).then(function success(response) {
            return response.data;
        }.bind(this), function error() {
            console.error('Error');
        });
    }

    orderUp(tracks) {
        return tracks.sort(compareUp);
    }

    orderDown(tracks) {
        return tracks.sort(compareDown);
    }

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
