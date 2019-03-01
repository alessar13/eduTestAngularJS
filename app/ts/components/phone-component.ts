import * as angular from 'angular';
import PhoneController from '../controllers/phone-controller';
import '../../sass/phone.scss';

const componentPhone: angular.IComponentOptions = {
    template: require('../views/phone.html'),
    controller: PhoneController
};

export default componentPhone;