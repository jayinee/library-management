(function () {
    'use strict';

    var app = angular.module('myapp');
    
    app.controller('LoginController', ['$rootScope', '$state', '$stateParams', 'LOGINS', LoginController]);

    function LoginController($rootScope, $state, $stateParams, logins) {
        var vm = this;
        vm.user = {
            'login': '',
            'password': ''
        };

        vm.loginClick = loginClick;

        function loginClick() {
            for (var i = 0; i < logins.length; ++i) {
                if(
                    (logins[i]['login'] == vm.user.login)&&
                    (logins[i]['password'] == vm.user.password)
                    ) {
                    $rootScope.loggedInUser = vm.user.login;
                    if (!$stateParams.returnState)
                    {
                        $state.go('home', {});
                    }
                    else {
                        alert("please register first");
                        //$state.go($stateParams.returnState, {});
                    }
                    break;
                }
            }
        }
    }

})();