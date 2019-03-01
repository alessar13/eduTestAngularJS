<<<<<<< HEAD
# eduTestAngularJS
AngularJS educational project
=======
# eduTestAngularJS
AngularJS educational project
//////////////////////////////////////////////////////////

/* Controller handles calculations and binding
*/
function Ctrl($scope) {
  
  // Bound to the output display
  $scope.output = "0";
  
  // // Used to evaluate whether to start a new number
  // // in the display and when to concatenate
  $scope.newNumber = true;
  
  // // Holds the pending operation so calculate knows
  // // what to do
  $scope.pendingOperation = null;
  
  // Bound to the view to display a token indicating
  // the current operation
  $scope.operationToken = "";
  
  // // Holds the running total as numbers are added/subtracted
  $scope.runningTotal = null;
  
  // // Holds the number value of the string in the display output
  $scope.pendingValue = null;
  
  // // Tells calculate what to do when the equals buttons is clicked repeatedly
  $scope.lastOperation = null;
  
  // Constants
  // var ADD = "adding";
  // var SUBTRACT = "subtracting";
  // var ADD_TOKEN = "+";
  // var SUBTRACT_TOKEN = "-";
  
  /*
  * Runs every time a number button is clicked.
  * Updates the output display and sets 
  * newNumber flag
  */
  $scope.updateOutput = function(btn) {
    if($scope.output == "0" || $scope.newNumber) {
      $scope.output = btn;
      $scope.newNumber = false;
    } else {
        $scope.output += String(btn);
    }
    $scope.pendingValue = toNumber($scope.output);
  };
  
  /*
  * Runs every time the add button is clicked.
  * If a number has been entered before the add
  * button was clicked we set the number as a pendingValue,
  * set ADD as a pendingOperation, and set the token. 
  * If no number was entered but an existing calculated
  * number is in the output display we add the last added
  * value on to the total again.
  */
  $scope.add = function() {
    if($scope.pendingValue) {  
      if($scope.runningTotal && $scope.pendingOperation == ADD ) {
        $scope.runningTotal += $scope.pendingValue;
      } else if($scope.runningTotal && $scope.pendingOperation == SUBTRACT ) {
        $scope.runningTotal -= $scope.pendingValue;
      }
      else {
        $scope.runningTotal = $scope.pendingValue;
      }
    } 
    setOperationToken(ADD);
    setOutput(String($scope.runningTotal));
    $scope.pendingOperation = ADD;
    $scope.newNumber = true;
    $scope.pendingValue = null;
  };
  
  /*
  * Runs every time the subtract button is clicked.
  * If a number has been entered before the subtract
  * button was clicked we set the number as a pendingValue,
  * set subtract as a pendingOperation, and set the token. 
  * If no number was entered but an existing calculated
  * number is in the output display we subtract the last added
  * value from the total.
  */
  $scope.subtract = function() {
    if($scope.pendingValue) {
      if($scope.runningTotal && ($scope.pendingOperation == SUBTRACT) ) {
        $scope.runningTotal -= $scope.pendingValue;
      } else if($scope.runningTotal && $scope.pendingOperation == ADD ) {
        $scope.runningTotal += $scope.pendingValue;
      } else {
        $scope.runningTotal = $scope.pendingValue;
      }
    }
    setOperationToken(SUBTRACT);
    setOutput(String($scope.runningTotal));
    $scope.pendingOperation = SUBTRACT;
    $scope.newNumber = true;
    $scope.pendingValue = null;
  };
  
  /*
  * Runs when the equals (=) button is clicked.
  * If a number has been entered before the equals
  * button was clicked we perform the calculation
  * based on the pendingOperation.
  * If no number was entered but an existing calculated
  * number is in the output display we repeat the last
  * operation. For example, if 8+2 was entered we will
  * continue to add 2 every time the equals button is clicked.
  */
  $scope.calculate = function() {
    if(!$scope.newNumber) {
      $scope.pendingValue = toNumber($scope.output);
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
    setOutput($scope.runningTotal);
    setOperationToken();
    $scope.pendingOperation = null;
    $scope.pendingValue = null;
  };
  
  /* 
  * Initializes the appropriate values
  * when the clear button is clicked.
  */
  $scope.clear = function() {
    $scope.runningTotal = null;
    $scope.pendingValue = null;
    $scope.pendingOperation = null;
    setOutput("0");
  };
  
  /* 
  * Updates the display output and resets the
  * newNumber flag.
  */
  setOutput = function(outputString) {
    $scope.output = outputString;
    $scope.newNumber = true;
  };
  
  /* 
  * Sets the operation token to let the user know
  * what the pendingOperation is
  */
  setOperationToken = function(operation) {
    if(operation == ADD) {
      $scope.operationToken = ADD_TOKEN;
    } else if (operation == SUBTRACT) {
      $scope.operationToken = SUBTRACT_TOKEN;
    } else {
      $scope.operationToken = "";
    }
  };
  
  /* Converts a string to a number so we can
  * perform calculations. Simply multiplies
  * by one to do so
  */
  toNumber = function(numberString) {
    var result = 0;
    if(numberString) {
      result = numberString*1;
    }
    return result;
  };
  
}


///////////////////////////////////////////////////////////

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
         <!-- Tell the app to use the Ctrl scope defined in our app.js -->
  <div ng-app ng-controller="Ctrl">
  
    <div class="calcbody">
    
      <!-- Calculator Display -->
      <div class="thinborder" >
      
        <!-- Display is bound to scope variables in app.js -->
        <p class="output" name="output" >
          {{output}}<br>
          {{operationToken}}
        </p>
        
      </div>
    
      <div class="calcbuttons">
        
        <!-- Buttons all have ng-click directives that call functions in app.js -->
        
        <button name="btn1" class="numberbutton" value="1" ng-click='updateOutput(1)'>1</button>
        <button name="btn2" class="numberbutton" value="2" ng-click='updateOutput(2)'>2</button>
        <button name="btn3" class="numberbutton" value="3" ng-click='updateOutput(3)'>3</button>
        <button name="btnMinus" class="operationbutton" ng-click='subtract()'> - </button>
        <br>
        <button name="btn4" class="numberbutton" value="4" ng-click='updateOutput(4)'>4</button>
        <button name="btn5" class="numberbutton" value="5" ng-click='updateOutput(5)'>5</button>
        <button name="btn6" class="numberbutton" value="6" ng-click='updateOutput(6)'>6</button>
        <button name="btnPlus" class="operationbutton" ng-click='add()'>+</button>
        <br>
        <button name="btn7" class="numberbutton" value="7" ng-click='updateOutput(7)'>7</button>
        <button name="btn8" class="numberbutton" value="8" ng-click='updateOutput(8)'>8</button>
        <button name="btn9" class="numberbutton" value="9" ng-click='updateOutput(9)'>9</button>
        <button name="btnEquals" class="operationbutton" ng-click='calculate()'>=</button>
        <br>
        <button name="btn0" class="numberbutton" value="0" ng-click='updateOutput(0)'>0</button>
        <button name="btnClear" class="clearbutton" ng-click='clear()'>CLEAR</button>
        
      </div>
    
    </div>
    
    <!-- Scoped variables displayed for debugging -->
    <p>
      pendingOperation: {{pendingOperation}}<br>
      lastOperation: {{lastOperation}}<br>
      runningTotal: {{runningTotal}}<br>
      pendingValue: {{pendingValue}}<br>
      newNumber: {{newNumber}}
    </p>
    
  </div>
    <script src="main.js"></script>
</body>
</html>
  
  
 ///////////////////////////////////////////////////
 
>>>>>>> fdef9fb45377a36a0c26e74cb3e9ab901244e800
