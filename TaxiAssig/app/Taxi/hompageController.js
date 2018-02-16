angular.module("itsItinerary").controller("itineraryController", function ($scope, $http) {
    $scope.Bookings()[
        {
            CurrentPassengers: 1,
            DropOffLocation:"Sheffield Train Station",
            Id: 101,
            PassengerName:"Jane",
            PassengerLocation:"Peniston",
            VehicleId:901
        },
        {
            CurrentPassengers: 1,
            DropOffLocation: "Sheffield Arena",
            Id: 102,
            PassengerName: "Jacky",
            PassengerLocation: "Chesterfield",
            VehicleId: 902
        }
    ];
});