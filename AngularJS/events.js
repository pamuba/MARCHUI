var app = angular
            .module('myModule',[])
            .controller('myController', function($scope){
                // var tech = [
                //     { name:"C#", likes:0, dislikes:0},
                //     { name:"Angular", likes:0, dislikes:0},
                //     { name:"React", likes:0, dislikes:0},
                //     { name:"Vue", likes:0, dislikes:0},
                //     { name:"GraphQL", likes:0, dislikes:0},
                //     { name:"Webpack", likes:0, dislikes:0},
                // ];

                // $scope.tech = tech;

                // $scope.incrementLikes = function(tech){
                //     tech.likes++
                // }

                // $scope.decrementLikes = function(tech){
                //     tech.dislikes++
                // }



                var employees = [
                    {
                        name: "Ben", dateOfBirth: new Date("November 23, 1980"),
                        gender: "Male", salary: 55000.788
                    },
                    {
                        name: "Sara", dateOfBirth: new Date("May 05, 1970"),
                        gender: "Female", salary: 68000
                    },
                    {
                        name: "Mark", dateOfBirth: new Date("August 15, 1974"),
                        gender: "Male", salary: 57000
                    },
                    {
                        name: "Pam", dateOfBirth: new Date("October 27, 1979"),
                        gender: "Female", salary: 53000
                    },
                    {
                        name: "Todd", dateOfBirth: new Date("December 30, 1983"),
                        gender: "Male", salary: 60000
                    }
                ];

                $scope.employees = employees
                $scope.rowCount = 3;

            })