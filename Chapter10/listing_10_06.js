$http.get('http://jsonplaceholder.typicode.com/photos').success(function(data){$scope.results = data;});