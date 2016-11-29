(function () {
    'use strict';

    var app = angular.module('myapp');
    
    app.controller('IssueController', ['$rootScope', '$state', '$stateParams', 'BOOKS', IssueController]);

    function IssueController($rootScope, $state, $stateParams, books) {

        var vm = this;
        vm.bookId = undefined;
        if ($stateParams.bookId)
        {
            vm.bookId = parseInt($stateParams.bookId, 10);
        }
        vm.books = books;
        vm.issueClick = issueClick;

        init();

        
        function init() {
        }

        function issueClick() {
            var abvc = vm;
        }

    }

})();