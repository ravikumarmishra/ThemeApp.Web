(function () {
    'use strict';

    angular
        .module('ThemeApp')
        .factory('AdminPannelfactory', AdminPannelfactory);

    AdminPannelfactory.$inject = ['$http'];

    function AdminPannelfactory($http) {
        var service = {};
        service.sendFile = function (name, imageFile1, imageFile2) {
            alert("calling API...");
            console.log(name);
            console.log(imageFile1);
            console.log(imageFile2);
            //return $http.post('http://localhost:30326/api/UploadFiles/', imageFile1, imageFile2);
            return $http({
                method: 'POST',
                url: 'http://localhost:30326/api/UploadFiles/',
              //  contentType: 'multipart/form-data',
                processData: false,
              //  data:imageFile1,
                params:{
                    name: name,
                    file1:imageFile1,
                    file2:imageFile2
                }
            })
        };
        return service;
    }
})();