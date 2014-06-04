AngularGroupFilter
==================


Angular.js project, with an example use of a filter that groups a set of of values into pairs of objects.


##Example using ng-repeat attribute

###In angular controller
```

$scope.characterPointsMap = {
  sonic: 2239,
  mario: 3001,
  bucky: 4324,
  link:  3233
};
```

### In html body
```
<div ng-repeat="character in characterPointsMap | groupByTwo" ng-show="$even">
    <div class="left">
        {{character[0].key}}
        {{character[0].value}}
    </div>
    <div class="right">
        {{character[1].key}}
        {{character[1].value}}
    </div>
</div>
```