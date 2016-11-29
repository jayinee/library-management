    (function () {
    'use strict';

    var app = angular.module('myapp', ["ui.router"]);

    var logins = [
        { 'login': 'antriksh', 'password': 'patel' },
        { 'login': 'abc', 'password': 'xyz' },
    ];
    app.value('LOGINS', logins);

    var books = [
    {
        id: 1,
        name: "ABC's of Javascript",
        price: 250,
        description: "javaScript is usually described as a scripting language, rather than a programming language: they may best be distinguished by function, in that scripting languages are intended to be used by people without anything in the way of computer science background. ",
        image: "images/abc of js.jpg"
    },
    {
        id: 2,
        name: "Ajax complete reference",
        price: 2000,
        description: "ajax book -the complete reference",
        image: "images/ajax book.jpg"
    },
    {
        id: 3,
        name: "ng-book for angularJavascript",
        price: 4115,
        description: "Piecing together the documents is tough The documentation is not self-explanatory, one tutorial says one thing and another says something completely different.",
        image: "images/ng book.jpg"
    }];
    app.value("BOOKS", books);



    app.config(configBlock);

    app.run(function ($rootScope, $state) {
        $rootScope.$on('$stateChangeStart',
            function (event, toState, toParams, fromState, fromParams) {
                if (toState.requiresLogin) {
                    if (!$rootScope.loggedInUser) {
                        event.preventDefault();
                        $state.go('login', { 'returnState': toState.name });
                    }
                }
            })
    });

    function configBlock($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");

        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "/home/home.html"

            })
           
            .state('forgotpassword', {
                url: "/forgotpassword",
                templateUrl: "forgotpassword.html"
            })
            .state('login', {
                url: "/login?returnState",
                params: {
                    returnState: ''
                },
                templateUrl: "/login/login.html",
                controller: 'LoginController as vm'
            })
            .state('register', {
                url: "/register",
                templateUrl: "/register/register.html",
                controller: 'RegisterController as vm'

            })
            .state('issuebook', {
                url: "/issuebook/:bookId",
                requiresLogin: true,
                templateUrl: "/issue/issuebook.html",
                controller: 'IssueController as vm'
            })

              .state('returnbook', {
                  url: "/returnbook",
                  requiresLogin: true,
                  templateUrl: "/return/returnbook.html",
                  controller: 'ReturnController as vm'

              })


            .state('listofbooks', {
                url: "/listofbooks",
                templateUrl: "/listofbooks/listofbooks.html",
                controller: 'ListofbooksController as vm'

            })

            .state('search', {
                url: "/search",
                templateUrl: "/search/search.html",
               controller:'SearchController as vm'
            });
    }
})();