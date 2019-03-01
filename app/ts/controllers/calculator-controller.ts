export default class CalculatorController {
	
	static $inject = [
		'$scope'	
	]
	
	constructor(private $scope: any) {
		
		$scope.output = '0';
		$scope.newNumber = true;
		$scope.pendingOperation = null;
		$scope.operationToken = "+";
		$scope.runningTotal = null;
		$scope.pendingValue = null;
		$scope.lastOperation = null;

		let ADD = "adding";
		let SUBTRACT = "subtracting";
		let ADD_TOKEN = "+";
		let SUBTRACT_TOKEN = "-";
		

		$scope.reset = function(){ 
			this.output = '0'; 
			$scope.runningTotal = null;
    		$scope.pendingValue = null;
    		$scope.pendingOperation = null;
		}

		$scope.changeSign = () => {
			return ($scope.output > 0 && $scope.output != 0) ? $scope.output *= -1 : $scope.output = Number (Math.abs($scope.output));
			}
		
		$scope.outputUpdate = (value: Number) => {
			($scope.output == "0") ? $scope.output = value : $scope.output += String(value);
			$scope.pendingValue = Number($scope.output);
		};	

		$scope.percentCount = () => {
			
		}
	
		
		$scope.multiply = () => {
				
			}
		$scope.add = () => {console.log('add')}
		$scope.divide = () => {console.log('divide')}
		
		$scope.subtract = () => {
			if($scope.pendingValue) {
				if($scope.runningTotal && ($scope.pendingOperation == '−') ) {
				   	 $scope.runningTotal -= $scope.pendingValue;
				} else if($scope.runningTotal && $scope.pendingOperation == '+' ) {
				  	  $scope.runningTotal += $scope.pendingValue;
				} else {
				 	   $scope.runningTotal = $scope.pendingValue;
				}
			}

			// setOperationToken('-');
			
			// setOutput(String($scope.runningTotal));
			// 	$scope.pendingOperation = '-';
			// 	$scope.newNumber = true;
			// 	$scope.pendingValue = null;
		}
		
		$scope.comma = (comma: String) => {
			if ($scope.output == '0') { 
				$scope.output += comma;
			}
			else {
				($scope.output == "0") ? $scope.output = comma : $scope.output += String(comma);
				$scope.pendingValue = Number($scope.output);
			};	
		};

    	

		$scope.equals = () => {console.log('Govinda')}
	}
}