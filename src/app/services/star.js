export function StarService($localStorage) {

    this.favourites = new Array();

    // window.onload = function() {
    //     localStorage.removeItem("favourites");
    // }

    function FavData (track, album) {
        this.album = album;
        this.track = track;
    }

    this.click = function(track, album) {
        if(typeof localStorage.getItem("favourites") === "null") {
            let retrievedFavourites = localStorage.getItem("favourites");
            this.favourites = JSON.parse(retrievedFavourites);
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

    // this.isFav=function(id){
    //     for (var i = $localStorage.favs.length-1; i>=0; i--) {
    //         if($localStorage.favs[i].id==id){
    //             return true;
    //         }
    //     }
    //     return false;
    // }

}
