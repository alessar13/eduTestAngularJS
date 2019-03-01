export default class BorderController {
    static $inject = [
        '$scope'
    ]

    constructor(private $scope: any) {
        $scope.name = "Govinda";
    }
}