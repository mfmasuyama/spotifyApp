export function StarService($localStorage) {

    this.favourites = new Array();

    this.click = function(item) {
        let isFavourite = false;
        for(let i=0; i<this.favourites.length; i++) {
            if(this.favourites[i].id === item.id) {
                isFavourite = true;
                this.favourites.splice(i,1);
            }
        }
        if(!isFavourite) {
            this.favourites.push(item);
        }
        console.log(this.favourites);
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
