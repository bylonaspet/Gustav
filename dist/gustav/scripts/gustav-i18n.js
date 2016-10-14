angular.module('gustav.i18n', ['pascalprecht.translate']).run(['$translatePartialLoader', function ($translatePartialLoader) {
    $translatePartialLoader.addPart('gustav');
}]);
