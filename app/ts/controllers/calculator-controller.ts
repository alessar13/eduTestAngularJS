export default class CalculatorController {
	
	static $inject = [
		'$scope'	
	]
	
	constructor(private $scope: any) {
		console.log('calculator controller init');
		$scope.name = 'dsadsa';
		$scope.output = '0';
		$scope.newNumber = true;
		$scope.pendingOperation = null;
		$scope.operationToken = "";
		$scope.runningTotal = null;
		$scope.pendingValue = null;
		$scope.lastOperation = null;
		

		$scope.reset = ()=> { $scope.output = '0'; }

		$scope.changeSign = () => {
			return ($scope.output > 0 && $scope.output != 0) ? $scope.output *= -1 : $scope.output = Number (Math.abs($scope.output));
			}
	
		$scope.percentCount  = () => {console.log('percent')}

		$scope.multiply = () => {console.log('multiply')}
		$scope.add = () => {console.log('add')}
		$scope.divide = () => {console.log('divide')}
		$scope.subtract = () => {console.log('subtract')}
		
		$scope.comma = (comma: String) => {
			if ($scope.output == '0') { 
				$scope.output += comma;
			}
			else {
				($scope.output == "0") ? $scope.output = comma : $scope.output += String(comma);
				$scope.pendingValue = Number($scope.output);
			};	
		};

    	$scope.outputUpdate = (value: Number) => {
			($scope.output == "0") ? $scope.output = value : $scope.output += String(value);
			$scope.pendingValue = Number($scope.output);
		};

		$scope.equals = () => {console.log('Govinda')}
		
		
	}
	

}






