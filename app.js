;
var app = angular.module('stuffApp', [])

.controller('stuffController', ['$scope', function($scope) {
  $scope.initialize = function() {
    $scope.stuffToRepeat = {
     controller: 39,
     paul: 3001,
     jetPack:4000,
     lego:2000,
     cola:66,
     dog:444
    };
  };
}])
.filter('groupByTwo', [function() {
  return function(resultSet) {
    var previousKey, previousValue;
    for(var i in resultSet){
      if (typeof resultSet[i] !== 'object') {
        if (previousKey) {
          resultSet[i] = [
            {value: resultSet[i], key: i},
            {value: previousValue, key: previousKey}
          ];
          previousKey = null;
          previousValue = null;
        } else {
          previousKey = i;
          previousValue = resultSet[i];
        }
      }
    }
    return resultSet;
  }
}])