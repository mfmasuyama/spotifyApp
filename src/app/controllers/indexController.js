export default class {
    constructor(
        $location,
        ApiService,
        StarService) {

    this.toResults = () => {
        $location.path("/results/" + this.search);
    };

    this.favourites = StarService.getFavourites();
    }
}
