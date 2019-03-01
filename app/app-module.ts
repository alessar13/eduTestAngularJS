import * as angular from 'angular';
import calculator from './ts/modules/calculator-module';
import body from './ts/modules/phone-module';
import border from './ts/modules/border-module';
import './sass/style.scss';


angular.module('app', [
    calculator,
    body,
    border
    
]);
