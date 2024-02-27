const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = function(integer) {
    return function(fare) {
        return fare * integer;
    };
};
const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);
const selectDifferentDrivers = function(drivers, selectingFunction) {
    return selectingFunction(drivers);
};
const drivers = ['Driver1', 'Driver2', 'Driver3', 'Driver4'];

console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); // Output: ['Driver1', 'Driver2']
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers)); // Output: ['Driver3', 'Driver4']

console.log(fareTripler(10)); // Output: 30 (10 * 3)
