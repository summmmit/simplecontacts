
//TODO - learn about scope in directives
app.directive('editable', function () {

    return {
        restrict: 'AE',
        templateUrl: './partials/editable.html',
        scope: {
            value: '=editable',
            field: '@fieldType'
        },
        controller: function ($scope) {
            $scope.editor = {
                showing: false,
                value: $scope.value
            }
            $scope.toggleEditor = function () {
                $scope.editor.showing = !$scope.editor.showing;
            }
            $scope.field = ($scope.field) ? $scope.field : 'text';
            $scope.save = function () {
                $scope.value = $scope.editor.value;
                $scope.toggleEditor();
            }
        }
    };
});