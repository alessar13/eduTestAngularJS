export default class CalculatorController {
	
	static $inject = [
		'$scope'	
	]
	
	constructor(private $scope: any) {
		
		$scope.output = '0';
		$scope.newNumber = true;
		$scope.pendingOperation = null;
		$scope.operationToken = "";
		$scope.runningTotal = null;
		$scope.pendingValue = null;
		$scope.lastOperation = null;

		// Constants
		let ADD = "adding";
		let SUBTRACT = "subtracting";
		// let MULTIPLY = 'multiplying';
		// let DIVIDE = 'dividing';
		let ADD_TOKEN = "+";
		let SUBTRACT_TOKEN = "-";
		// let MULTIPLY_TOKEN = '*';
		// let DIVIDE_TOKEN = '/';

		$scope.setOperationToken = function(operation: any) {
			if(operation == ADD) {
				$scope.operationToken = ADD_TOKEN;
			} else if (operation == SUBTRACT) {
				$scope.operationToken = SUBTRACT_TOKEN;
			} else {
				$scope.operationToken = "";
			}
		};

		$scope.setOutput = function(outputString: any) {
			$scope.output = outputString;
			$scope.newNumber = true;
		};
		

		$scope.reset = function(){ 
			this.output = '0'; 
			  $scope.runningTotal = null;
    		$scope.pendingValue = null;
    		$scope.pendingOperation = null;
		}

		$scope.changeSign = () => {
			return ($scope.output > 0 && $scope.output != 0) ? $scope.output *= -1 : $scope.output = Number (Math.abs($scope.output));
			}
	
		
		$scope.add = () => {
			if($scope.pendingValue) {  
				if($scope.runningTotal && $scope.pendingOperation == ADD ) {
					$scope.runningTotal += $scope.pendingValue;
				} else if ($scope.runningTotal && $scope.pendingOperation == SUBTRACT ) {
					$scope.runningTotal -= $scope.pendingValue;
				}
				else {
					$scope.runningTotal = $scope.pendingValue;
				}
			} 
		$scope.setOperationToken(ADD);
		$scope.setOutput(String($scope.runningTotal));
		$scope.pendingOperation = ADD;
		$scope.newNumber = true;
		$scope.pendingValue = null;
		}
		
		
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

			$scope.setOperationToken('-');
			$scope.setOutput(String($scope.runningTotal));
				$scope.pendingOperation = '-';
				$scope.newNumber = true;
				$scope.pendingValue = null;
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

    	$scope.outputUpdate = (value: Number) => {
			($scope.output == "0") ? $scope.output = value : $scope.output += String(value);
			$scope.pendingValue = Number($scope.output);
		};

		$scope.percentCount  = () => {console.log('percent')}
		$scope.divide = () => {console.log('divide')}
		$scope.multiply = () => {
				
			}

			$scope.toNumber = function(numberString: any) {
				let result = 0;
				if(numberString) {
						result = numberString*1;
						}	
					return result;
			};

			

	$scope.calculate = function() {
	  if(!$scope.newNumber) {
		$scope.pendingValue = Number($scope.output);
		$scope.lastValue = $scope.pendingValue;
	  } 
	  if($scope.pendingOperation == ADD) {
		$scope.runningTotal += $scope.pendingValue;
		$scope.lastOperation = ADD;
	  } else if($scope.pendingOperation == SUBTRACT) {
		$scope.runningTotal -= $scope.pendingValue;
		$scope.lastOperation = SUBTRACT;
	  } else {
		if($scope.lastOperation) {
		  if($scope.lastOperation == ADD) {
			if($scope.runningTotal) {
			  $scope.runningTotal += $scope.lastValue;
			} else {
			  $scope.runningTotal = 0;
			}
		  } else if($scope.lastOperation == SUBTRACT) {
			if($scope.runningTotal) {
			  $scope.runningTotal -= $scope.lastValue;
			} else {
			  $scope.runningTotal = 0;
			}
		  }
		} else {
		  $scope.runningTotal = 0;
		}
	  }
	  $scope.setOutput($scope.runningTotal);
	  $scope.setOperationToken();
	  $scope.pendingOperation = null;
	  $scope.pendingValue = null;
	};

	}	

}