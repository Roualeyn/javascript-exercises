const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        let oldestAge = -oldest["yearOfBirth"];
        let personAge = -person["yearOfBirth"];

        oldestAge += (oldest["yearOfDeath"] === undefined) ? new Date().getFullYear() : oldest["yearOfDeath"];        
        personAge += (person["yearOfDeath"] === undefined) ? new Date().getFullYear() : person["yearOfDeath"];
        
        return (oldestAge < personAge) ? person : oldest;
    }, people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
