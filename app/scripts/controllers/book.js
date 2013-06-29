'use strict';

angular.module('bookApp')
  .controller('BookCtrl', function ($scope, PostService) {
    $scope.addPost = function(type){
      PostService.addPost(type);
    }
    $scope.getPosts = function(){
      return PostService.getPosts();
    }
  });
