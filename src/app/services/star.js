export function StarService($localStorage) {

    this.click = function(item) { /* FIX */
        // if(typeof (Storage) !== "undefined") {
        //     console.log(typeof (Storage));
        //     if(typeof localStorage.getItem("favourites") !== "undefined" || typeof localStorage.getItem("favourites") === "null") {
        //         console.log(typeof localStorage.getItem("favourites"));
        //         let retrievedFavourites = localStorage.getItem("favourites");
        //         this.favouritesAux = JSON.parse(retrievedFavourites);
        //         console.log(typeof this.favouritesAux);
        //         if(typeof this.favouritesAux === "null") {
        //             this.favourites = new Array();
        //         } else {
        //             this.favourites = this.favouritesAux;
        //             console.log(this.favourites);
        //         }
        //     }
        // }

        this.favourites = new Array();
        //Favourites.
        let isFavourite = false;
        for(let i=0; i<this.favourites.length; i++) { //Check if it's already a favourite.
            if(this.favourites[i].id === item.id) {
                isFavourite = true;
                this.favourites.splice(i,1);
            }
        }
        if(!isFavourite) { // Insert it if isn't.
            this.favourites.push(item);
        }
        console.log(this.favourites);
        // localStorage.setItem("favourites", JSON.stringify(this.favourites)); // Save favourites.
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
