import * as angular from 'angular';
import CalculatorController from '../controllers/calculator-controller';

const componentOptions: angular.IComponentOptions = {
	template: require('../views/calculator.html'),
	controller: CalculatorController
};
export default componentOptions;