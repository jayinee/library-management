(function () {
    'use strict';

    var app = angular.module('myapp');

    app.controller('ReturnController', ['$rootScope','BOOKS', ReturnController]);

    function ReturnController($Scope,books) {

        var vm = this;
     
        vm.books = books;
      
    }

})();


