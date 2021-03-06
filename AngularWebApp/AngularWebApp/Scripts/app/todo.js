﻿//function TodoCtrl($scope) {
angular
.module("app", [])
.controller("TodoCtrl", function ($scope) {

    $scope.todos = [
        { text: "Learn angular", done: false },
        { text: "learn more", done: false },
    ];

    $scope.getTotalTodos = function () {
        return $scope.todos.length;
    };

    $scope.clearCompleted = function () {
        $scope.todos = _.filter($scope.todos, function(todo){
            return !todo.done;
        });
    };

    $scope.addTodo = function () {
        $scope.todos.push({ text: $scope.formTodoText, done: false });
        $scope.formTodoText = '';
    };
});