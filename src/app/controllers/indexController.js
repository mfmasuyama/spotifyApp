export default class {

    constructor(
        $location,
        ApiService,
        StarService
    ) {

        this.location = $location;
        this.favourites = StarService.getFavourites();

    }

    toResults() {
        this.location.path("/results/" + this.search);
    };
}
