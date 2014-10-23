'use strict';

function generateSnippet(config) {
	var code = '<script type="text/javascript">\n';
	angular.forEach(config, function(obj, key) {
		if (obj.value)
			code += '\tmmrConfig.'+key+' = "'+obj.value+'",\n';
	})
	code += '<'+'/script>';
	return code;
};

var app = angular.module('app', []);

app.controller('MainCtrl', function($scope) {
	$scope.context = mmrContext;
	$scope.config = mmrConfig;
	$scope.results = check($scope.config, $scope.context);
	$scope.dest = $scope.context.currentUrl.value;
	$scope.exclude = RegExp($scope.config.excludedRegexpPattern.value).test($scope.context.currentUrl.value);
	$scope.update = function () {
		console.log(this.config);
		$scope.config = this.config;
		var pattern = new RegExp($scope.config.excludedRegexpPattern.value);
		$scope.exclude = pattern.test(this.context.currentUrl.value);
		$scope.dest = $scope.context.currentUrl.value;
		$scope.results = check($scope.config, $scope.context);
		console.log($scope.exclude);
		console.log($scope.context.currentUrl)
		$scope.snippet = generateSnippet($scope.config);
		return;
	};
	$scope.snippet = generateSnippet($scope.config);
});