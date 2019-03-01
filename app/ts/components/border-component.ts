import BorderController from "../controllers/border-controller";
import * as angular from 'angular';
import '../../sass/border.scss';

const componentBorder: angular.IComponentOptions = {
    template: require('../views/border.html'),
    controller: BorderController
};

export default componentBorder;