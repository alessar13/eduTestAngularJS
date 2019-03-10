// import * as blogList from '../blog-list/blog-list.module';
import * as angular from 'angular';

export default angular.module('blogList')
        .controller('Test', ($scope)=> {
                console.log('Hello1');
                $scope.hello = "Govinda";
        })



//     .component('blogList', function(): void => {

//     });