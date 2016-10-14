angular.module('gustav.history.i18n', ['pascalprecht.translate']).run(['$translatePartialLoader', function($translatePartialLoader) {
    $translatePartialLoader.addPart('plugins/history');
}]);
