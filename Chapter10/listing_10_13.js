beforeEach(inject(function($controller,$rootScope,$httpBackend,$routeParams){scope = $routeScope.$new();routeParams = $routeParams;routeParams.postId = 1;httpBackend = $httpBackend;httpBackend.expectGet('http://jsonplaceholder.typicode.com/photos/'+routeParams.postId).respond({id:'1', title:'title 1', thumbnailUrl:'myImage.png'});PostCtrl = $controller('PostCtrl', {$scope: scope});httpBackend.flush();});