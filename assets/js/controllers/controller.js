/**
 * Created by summmmit on 07-02-2016.
 */
app.controller('homeCtl', function ($scope, contacts, $alert) {

    $scope.contacts = contacts.get();
    $scope.delete = function (index) {
        contacts.destroy(index);
        deletionAlert.show();
    }
    var deletionAlert = $alert({
        title: 'Success!',
        content: 'The Contact was deleted successfully',
        type: 'success',
        container: '#alertContainer',
        show: false
    });
});

// controller for adding a new contact
app.controller('addCtl', function ($scope, contacts, $alert) {

    $scope.submit = function () {

        $scope.formErrors = false;

        if (!$scope.addForm.$valid) {
            $scope.formErrors = true;
            return alert.error.show();
        }

        contacts.create($scope.contact);
        $scope.contact = null;
        alert.show();
    }
    var alert = {
        success: $alert({
            title: 'Success!',
            content: 'The Contact was added successfully',
            type: 'success',
            container: '#alertContainer',
            show: false
        }),
        error: $alert({
            title: 'Error!',
            content: 'There are some validation Errors',
            type: 'danger',
            container: '#alertContainer',
            show: false
        })
    }
});

// controller for individual contact
app.controller('contactCtl', function ($scope, $stateParams, contacts) {

    console.log($stateParams);
    $scope.contact = contacts.find($stateParams.id);

});
// controller for seaching page
app.controller('appCtl', function ($scope, $location) {

    $scope.startSearch = function () {
        $location.path('/');
        console.log("asdgasg");
    };
    $scope.pageClass = function (path) {
        return (path == $location.path()) ? 'active' : '';
    };
});

app.controller('signInCtl', function($scope, $alert){

    $scope.submit = function(){
        console.log($scope.email_address);

        $scope.formErrors = false;
        if(!$scope.signInForm.$valid){
            $scope.formErrors = true;
            return alert.error.show();
        }

    }
    var alert = {
        error: $alert({
            title: 'Error!!',
            content: 'There are some validation Errors',
            type: 'danger',
            container: '#alertContainer',
            show: false
        })
    }

})

