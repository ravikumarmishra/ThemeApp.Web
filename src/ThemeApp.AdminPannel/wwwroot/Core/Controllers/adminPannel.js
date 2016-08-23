(function () {
    'use strict';

    angular
        .module('ThemeApp')
        .controller('adminPannelController', adminPannelController);

    adminPannelController.$inject = ['$scope', '$http', '$timeout', '$window', '$location', 'AdminPannelfactory'];

    function adminPannelController($scope, $http, $location, $timeout, $window, AdminPannelfactory) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Admin Pannel';

        vm.submitForm = function (isValid) {
            if (isValid) {

                AdminPannelfactory.sendFile(vm.AdminData.Title, vm.fileList1, vm.fileList2).then(function (response) {
                    alert("hello");
                    vm.message = response;
                    console.log(vm.message);
                });

                //AdminPannelfactory.sendFile(vm.fileList2).then(function (response) {
                //    vm.message = response;
                //});

                //alert("submitted!!!");
                console.log(vm.AdminData);
            }
        };
        //var formdata = new FormData();
        //vm.getTheFiles = function ($files) {
        //    angular.forEach($files, function (value, key) {
        //        formdata.append(key, value);
        //    });
        //};

        // NOW UPLOAD THE IMAGES.
        vm.uploadImage = function () {

            var x = document.getElementById("myFile1");

            var txt = "";
            if ('files' in x) {
                if (x.files.length === 0) {
                    txt = "Select one or more files.";
                } else {
                    for (var i = 0; i < x.files.length; i++) {
                        txt += (i + 1) + ". file";
                        var file = x.files[i];
                        if ('name' in file) {
                            txt += "name:" + file.name + " ";
                        }
                        if ('size' in file) {
                            txt += "size:" + file.size + "bytes";
                        }
                        if ('type' in file) {
                            txt += "Type:" + file.type;
                        }
                    }
                }
            }
            else {
                if (x.value === "") {
                    txt += "Select one or more files.";
                } else {
                    txt += "The files property is not supported by your browser!";
                    txt += "<br>The path of the selected file: " + x.value; // If the browser does not support the files property, it will return the path of the selected file instead.
                }
            }
            //console.log(x.files[0].name.substr(x.files[0].name.length - 4));

            console.log(x.files[0]);
            var data = new FormData();
            for (var i = 0; i < x.files.length ; i++) {
                data.append(x.files[i].name, x.files[i]);
            }
            vm.fileList1 = data;
             swal("Good job!", "You clicked the button!", "success")

            console.log(vm.fileList1);
            vm.label1 = txt;
        }

        // NOW UPLOAD THE FILES.
        vm.uploadFile = function () {

            var x = document.getElementById("myFile2");
            var txt = "";
            if ('files' in x) {
                if (x.files.length === 0) {
                    txt = "Select one or more files.";
                } else {
                    for (var i = 0; i < x.files.length; i++) {
                        txt += (i + 1) + ". file";
                        var file = x.files[i];
                        if ('name' in file) {
                            txt += "name:" + file.name + " ";
                        }
                        if ('size' in file) {
                            txt += "size:" + file.size + "bytes";
                        }
                    }
                }
            }
            else {
                if (x.value === "") {
                    txt += "Select one or more files.";
                } else {
                    txt += "The files property is not supported by your browser!";
                    txt += "<br>The path of the selected file: " + x.value; // If the browser does not support the files property, it will return the path of the selected file instead.
                }
            }
            var data = new FormData();
            for (var i = 0; i < x.files.length ; i++) {
                data.append(x.files[i].name, x.files[i]);
            }
            vm.fileList2 = data;
            console.log(x.files[0]);
            vm.label2 = txt;
        }

    }
})();
