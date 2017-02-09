export default class {

    // window.onload = function() {
    //     localStorage.removeItem("favourites");
    // }
    constructor() {}

    click(track, album) {
        let retrievedFavourites = localStorage.getItem("favourites");
        this.favourites = JSON.parse(retrievedFavourites);
        if(!Array.isArray(this.favourites)) {
            this.favourites = new Array();
        }
        let isFavourite = false;
        for(let i=0; i<this.favourites.length; i++) {
            if(this.favourites[i].track.id === track.id) {
                isFavourite = true;
                this.favourites.splice(i,1);
            }
        }
        if(!isFavourite) {
            let aux = new FavData(track, album);
            this.favourites.push(aux);
        }
        localStorage.setItem("favourites", JSON.stringify(this.favourites));
    }

    getFavourites() {
        let retrievedFavourites = localStorage.getItem("favourites");
        this.favourites = JSON.parse(retrievedFavourites);
        return this.favourites;
    }

    isFavourite(track){
        let retrievedFavourites = localStorage.getItem("favourites");
        this.favourites = JSON.parse(retrievedFavourites);
        if(!Array.isArray(this.favourites)) {
            this.favourites = new Array();
        }
        let isFavourite = false;
        for(let i=0; i<this.favourites.length; i++) {
            if(this.favourites[i].track.id === track.id) {
                return true;
            }
        }
        return false;
    }

}

function FavData (track, album) {
    this.album = album;
    this.track = track;
}
