angular.module('gustav.account.i18n', ['pascalprecht.translate']).run(['$translatePartialLoader', function($translatePartialLoader) {
    $translatePartialLoader.addPart('plugins/account');
}]);