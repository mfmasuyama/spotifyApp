export function StarService($localStorage) {

    // window.onload = function() {
    //     localStorage.removeItem("favourites");
    // }

    function FavData (track, album) {
        this.album = album;
        this.track = track;
    }

    this.click = function(track, album) {
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
        console.log(this.favourites);
    }.bind(this);

    this.getFavourites = function() {
        let retrievedFavourites = localStorage.getItem("favourites");
        this.favourites = JSON.parse(retrievedFavourites);
        return this.favourites;
    }.bind(this);

    this.isFavourite = function(track){
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
