angular.module('ngcsas.core.i18n', ['pascalprecht.translate']).run(['$translatePartialLoader', function ($translatePartialLoader) {
   $translatePartialLoader.addPart('core');
}]);
