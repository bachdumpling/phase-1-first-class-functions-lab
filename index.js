const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(drivers) {
    return ['Antonia', 'Nuru'];
}

function returnLastTwoDrivers(drivers) {
    return ['Amari', 'Mo'];
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

const createFareMultiplier = (number) => {
    return function(ridePrice) {
        return ridePrice * number
    }
}

const fareDoubler = function createFareMultiplier(number) {
    return number * 2
}

const fareTripler = function createFareMultiplier(number) {
    return number * 3
}

function selectDifferentDrivers(drivers, func) {
    return func;
}
