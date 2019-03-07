import * as angular from 'angular';
import './sass/style.scss';

export const myApp=angular.module('myApp', []);
            myApp.controller('phoneController', function($scope) {
            
            $scope.phone = {

                    name: 'Nokia Lumia 630',
                    year: 2014,
                    price: 200,
                    company: {
                        name: 'Nokia',
                        country: 'Финляндия'
                    }
                }
            });

console.log('Gopala')




