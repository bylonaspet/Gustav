angular.module('gustav.buildingSaving.i18n', ['pascalprecht.translate']).run(['$translatePartialLoader', function($translatePartialLoader) {
    $translatePartialLoader.addPart('plugins/buildingSaving');
}]);
