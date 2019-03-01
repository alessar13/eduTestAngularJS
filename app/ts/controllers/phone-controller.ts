export default class PhoneController {
    
    static $inject = [
		'$scope'	
    ]
    
    constructor(private $scope: any) {
        $scope.name = 'Gopala';
    }

}
	