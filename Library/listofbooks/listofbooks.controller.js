(function () {
    'use strict';

    var app = angular.module('myapp');

    app.controller('ListofbooksController', ['$rootScope', '$state', 'BOOKS', ListofbooksController]);

    function ListofbooksController($rootScope, $state, books) {
        var vm = this;
        vm.books = books;
        vm.user = {
            'login': '',
            'password': ''
        };
    }
})();