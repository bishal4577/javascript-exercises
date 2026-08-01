const findTheOldest = function(people) {

    let curYear = new Date().getFullYear();

    const getAge = p => {
        let death = p.yearOfDeath || curYear;
        return death - p.yearOfBirth;

    };

    let maxAge = people[0];

    people.forEach(p => {
        if(getAge(p) > getAge(maxAge)){
            maxAge = p;
        }
    });

    return maxAge;

};

// Do not edit below this line
module.exports = findTheOldest;
