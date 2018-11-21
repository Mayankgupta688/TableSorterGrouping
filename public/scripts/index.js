var testModule = angular.module("testModule", []);

testModule.controller("testController", function($scope, $http) {
    $scope.availableArray = [];
    $scope.requiredArray = [];
    $scope.selectedColumnInfo = null;
    $scope.title = "";
    $scope.resultsPerPage = 0;
    $scope.defaultReport = "";
    $scope.isShared = false;
    $scope.isDefault = false;

    $http.get("/data").then((responseData) => {

        $scope.title = responseData.data.title;
        $scope.resultsPerPage = responseData.data.resultsPerPage;
        $scope.defaultReport = responseData.data.defaultReport;
        $scope.isShared = responseData.data.isShared;
        $scope.isDefault = responseData.data.isDefault;

        for(let i=0; i<responseData.data.fields.length; i++) {
            responseData.data.fields[i].isSelected = false;
            if(responseData.data.fields[i].visible == true) {
                $scope.availableArray.push(responseData.data.fields[i]); 
            }
            else {
                $scope.requiredArray.push(responseData.data.fields[i])
            }
        }
    });
    

   

    $scope.selectedElement = function(refData) {
        for(let i=0; i<$scope.availableArray.length; i++){
            $scope.availableArray[i].isSelected = false;
        }
        for(let i=0; i<$scope.requiredArray.length; i++){
            $scope.requiredArray[i].isSelected = false;
        }
        
        refData.isSelected = true;
        $scope.selectedColumnInfo = refData;
    }

    $scope.moveColumnToRequired = function() {
        var indexValue = -1;
        for(let i=0;i<$scope.availableArray.length; i++) {
            if($scope.availableArray[i].isSelected == true) {
                indexValue = i;
                break;
            }
        }

        if(indexValue > -1) {
            $scope.requiredArray.push($scope.availableArray[indexValue]);
            $scope.availableArray.splice(indexValue, 1);
        }
    }

    $scope.moveColumnToAvailable = function() {
        var indexValue = -1;
        for(let i=0;i<$scope.requiredArray.length; i++) {
            if($scope.requiredArray[i].isSelected == true) {
                indexValue = i;
                break;
            }
        }

        if(indexValue > -1) {
            $scope.availableArray.push($scope.requiredArray[indexValue]);
            $scope.requiredArray.splice(indexValue, 1);
        }
    }

    $scope.moveAllToRequired = function() {
        for(let i=0;i<$scope.availableArray.length; i++) {
            $scope.requiredArray.push($scope.availableArray[i]);
        }
        $scope.availableArray = [];
        
    }

    $scope.moveAllToAvailable = function() {
        for(let i=0;i<$scope.requiredArray.length; i++) {
            $scope.availableArray.push($scope.requiredArray[i]);
        }
        $scope.requiredArray = [];
        
    }

    $scope.moveColumnsUp = function() {

        var indexValue = -1;
        for(let i=0;i<$scope.requiredArray.length; i++) {
            if($scope.requiredArray[i].isSelected == true) {
                indexValue = i;
                break;
            }
        }

        if(indexValue > 0) {
            var objectValue = $scope.requiredArray.splice(indexValue, 1);
            $scope.requiredArray.splice(indexValue - 1, 0, objectValue[0] );
        }
    }

    $scope.moveColumnsDown = function() {
        var indexValue = -1;
        for(let i=0;i<$scope.requiredArray.length; i++) {
            if($scope.requiredArray[i].isSelected == true) {
                indexValue = i;
                break;
            }
        }

        if(indexValue > -1 && ((indexValue - 1) < $scope.requiredArray.length)) {
            var objectValue = $scope.requiredArray.splice(indexValue, 1);
            $scope.requiredArray.splice(indexValue + 1, 0, objectValue[0] );
        }
    }

    var getColumnData = function() {
        let outputColumns = [];
        for(let i=0; i<$scope.requiredArray.length; i++) {
            $scope.requiredArray[i].visibleOrder = i + 1;
            outputColumns.push($scope.requiredArray[i]);
        }

        for(let i=0; i<$scope.availableArray.length; i++) {
            $scope.availableArray[i].visibleOrder = -1;
            outputColumns.push($scope.availableArray[i]);
        }

        return outputColumns;
    }

    $scope.saveJsonData = function() {
        console.dir({
            title: $scope.title,
            resultsPerPage: $scope.resultsPerPage,
            defaultReport: $scope.defaultReport,
            isShared: $scope.isShared,
            isDefault: $scope.isDefault,
            columnData: getColumnData()
        });
    }
});