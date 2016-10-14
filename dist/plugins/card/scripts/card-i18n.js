angular.module('gustav.card.i18n', ['pascalprecht.translate']).run(['$translatePartialLoader', function($translatePartialLoader) {
    $translatePartialLoader.addPart('plugins/card');
}]);
