'use strict';

angular.module('bookApp')
  .controller('BookCtrl', function ($scope, PostService) {
    $scope.addPost = function(){
      PostService.addPost("text");
    }
    $scope.getPosts = function(){
      return PostService.getPosts();
    }
  });
