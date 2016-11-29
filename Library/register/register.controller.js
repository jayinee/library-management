
(function () {
    'use strict';

    var app = angular.module('myapp');

    app.controller('RegisterController', ['$state', 'LOGINS', RegisterController]);

    function RegisterController($state, logins) {
        var vm = this;
        vm.user = {
            'login': '',
            'password': '',
            'address': '',
            'phonenumber':''
        };

        //var logins = app.constant('logins');
        vm.registerClick = registerClick;

        function registerClick() {
            var found = false;
            for (var i = 0; i < logins.length; ++i) {
                if (
                    (logins[i]['login'] == vm.user.login)
                    )
                {
                    found = true;
                    alert("Duplicate Login");
                    break;
                }
            }

            if (!found) {
                logins.push(vm.user);
                $state.go('login', {});
            }

        }
    }

})();






