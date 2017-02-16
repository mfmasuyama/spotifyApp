export default class {

    constructor($http) {
      this.http = $http;
    }

    getArtists(name) {
        return this.http({
            method: 'GET',
            url: "https://api.spotify.com/v1/search?q=" + name + "&type=artist&limit=10"
        }).then((response) => {
            return response.data.artists.items;
        }, () => {
            console.error('Error');
        });
    }

    getAlbums(id) {
        return this.http({
            method: 'GET',
            url: "https://api.spotify.com/v1/artists/" + id + "/albums"
        }).then((response) => {
            return response.data.items;
        },  () => {
            console.error('Error');
        });
    }

    getArtist(id) {
        return this.http({
            method: 'GET',
            url: "https://api.spotify.com/v1/artists/" + id
        }).then((response) => {
            return response.data;
        }, () => {
            console.error('Error');
        });
    }

    getTracks(id) {
        return this.http({
            method: 'GET',
            url: "https://api.spotify.com/v1/albums/" + id + "/tracks"
        }).then((response) => {
            return response.data.items;
        }, () => {
            console.error('Error');
        });
    }

    getAlbum(id) {
        return this.http({
            method: 'GET',
            url: "https://api.spotify.com/v1/albums/" + id
        }).then((response) => {
            return response.data;
        }, () => {
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
