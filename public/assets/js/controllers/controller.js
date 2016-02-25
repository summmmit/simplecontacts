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
// controller for signInPage
app.controller('signInCtl', function ($scope, $alert) {

    $scope.signInFormErrors = {
        signInFormEmailErrors: false,
        signInFormPasswordErrors: false,
    }

    $scope.submit = function () {

        $scope.validateEmail();
        $scope.validatePassword();
    }
    $scope.validateEmail = function(){

        if (!$scope.signInForm.email_address.$valid) {
            $scope.signInFormErrors.signInFormEmailErrors = true;
            alert.email_invalid_error.show();
        } else {
            $scope.signInFormErrors.signInFormEmailErrors = false;
            alert.email_invalid_error.hide();
        }
    }
    $scope.validatePassword = function(){

        if (!$scope.signInForm.password.$valid) {
            $scope.signInFormErrors.signInFormPasswordErrors = true;
            alert.password_invalid_error.show();
        } else {
            $scope.signInFormErrors.signInFormPasswordErrors = false;
            alert.password_invalid_error.hide();
        }
    }
    $scope.validateInputText = function(){

        if (!$scope.signInForm.password.$valid) {
            $scope.signInFormErrors.signInFormPasswordErrors = true;
            alert.password_invalid_error.show();
        } else {
            $scope.signInFormErrors.signInFormPasswordErrors = false;
            alert.password_invalid_error.hide();
        }
    }
    var alert = {
        email_pass_invalid_error: $alert({
            title: '',
            content: 'Email and password do not match!!',
            type: 'danger',
            dismissable: false,
            container: '#email-pass-invalid-error',
            show: false
        }),
        email_invalid_error: $alert({
            title: '',
            content: 'Please, give valid email Address!!',
            type: 'danger',
            dismissable: false,
            container: '.email-error',
            show: false
        }),
        password_invalid_error: $alert({
            title: '',
            content: 'Please, give your password!!',
            type: 'danger',
            dismissable: false,
            container: '#password-error',
            show: false
        }),
        input_text_invalid_error: $alert({
            title: '',
            content: 'This field is mandatory!!',
            type: 'danger',
            dismissable: false,
            container: '#input-text-error',
            show: false
        })
    }
});

app.factory('loginValidation', function loginValidationFactory ($alert) {


});

