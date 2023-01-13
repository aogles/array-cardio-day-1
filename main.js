//#1

const birthYear =  inventors.filter(function(inventors){  //function here can be replaced by =>
	if( inventors.year >= 1500 && inventors.year < 1600){
		return true;
	}
});

console.table(birthYear); //.table will put everything in a table for you like below

//answer: 0	'Galileo'	'Galilei'	1564	1642
//        1	'Johannes'	'Kepler'	1571	1630

// const fiteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year <1600))
//#2

const fullName = inventors.map(function( a, b ){
    return a.first + '-' + b.last;
});

console.log(fullName); //this returned the first name, why was the last name 'undefined'?

//answer:['Albert-undefined', 'Isaac-undefined', 'Galileo-undefined', 'Marie-undefined',
// 'Johannes-undefined', 'Nicolaus-undefined', 'Max-undefined', 'Katherine-undefined', 'Ada-undefined', 'Sarah E.-undefined', 'Lise-undefined', 'Hanna-undefined']
//#3

const birthDay = inventors.sort(function(a, b) {
    if (a.years > b.year) {
        return 1; // this is what determined which birthdate came first 
    } else {
        return -1;
    }
})
console.log(birthDay); 

// const ordered = inventors.sort((a,b) => a.year > b.year ? 1 ; -1);
//#4

const totalYears = inventors.reduce(function(total, inventor) {
    return total + (inventor.passed - inventor.year);
}, 0);

console.log(totalYears); //861

//refactor from video with =>
const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0); //523 

//#5
// same as #4 us .sort
const oldest = inventors.sort(function(a, b) {
    const lastGuy = a.passed - a.year;
    const nextGuy = b.passed - b.year;

    if (lastGuy >  nextGuy) {  //refer to line 24  for clearner version
        return -1
    } else
    return 1;
});
console.log(oldest); //or console.table(oldest)

//#6 
/*
const category = document.querySelector('.mw-category');
const links = Array.from(category.querySelectorAll('a')); //array.from places in arraay

const de = links
.map(link => link.textContent)
.filter(streetName => streetName.includes('de')); */

//#7

 const peeps = people.sort(function(lastOne, firstOne) {
    const [lastA, firstA] = firstOne.split(',');
    const [lastB, firstB] = lastOne.split(',');
     // this will allow us to have first and last name split
 return lastA > lastB ? 1 : -1; //questions about this part, how does JS know a is greater than B?
    

 });
console.log(peeps);  //returned list of 41 people in alphabeticl order

//#8

 const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

  const transpo = data.reduce(function(obj, item){
    if (!obj[item]) {
        obj[item] =0;
    }
    obj[item] ++; // this would add one but here can ct as method to check that the increments would increase automatically and count each 
  return obj;

}, {}); //error message data already declared