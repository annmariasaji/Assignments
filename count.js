//Program to find the number of people voted and in which age group they belong to
var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
console.log('Age limit of Young voters : 18 - 25');
console.log('Age limit of Mid voters   : 26 - 35');
console.log('Age limit of Old voters   : 36 - 55');

let numYoungPeople = voters.filter( a => a.age >=18 && a.age <= 25 );
let numYoungVotes = numYoungPeople.filter( a => a.voted === true);

console.log('numYoungVotes : ',numYoungVotes.length);
console.log('numYoungPeople : ',numYoungPeople.length);

let numMidPeople = voters.filter( a => a.age >=26 && a.age <= 35 );
let numMidVotes = numMidPeople.filter( a => a.voted === true);

console.log('numMidVotes : ',numMidVotes.length);
console.log('numMidPeople : ',numMidPeople.length);

let numOldPeople = voters.filter( a => a.age >=36 && a.age <= 55 );
let numOldVotes = numOldPeople.filter( a => a.voted === true);

console.log('numOldVotes : ',numOldVotes.length);
console.log('numOldPeople : ',numOldPeople.length);
