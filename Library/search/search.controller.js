(function () {
    'use strict';

    var app = angular.module('myapp');
    
    app.controller('SearchController', ['$rootScope', 'BOOKS', SearchController]);

    function SearchController($scope, books) {
        var vm = this;
        vm.books = books;
    }

})();


