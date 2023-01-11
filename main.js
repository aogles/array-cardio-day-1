const fifteen =  inventors(function(inventors){
	if( inventor.year >= 1500 && < 1600){
		return true;
	}
});

console.table(fifteen):

// const fiteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year <1600))

const fullName = inventors.map(inventor.first + '-' + inventor.last);

console.log(fullName);

const ordered = inventors.sort(function(a, b,) {
    if (a.years > b.year) {
        return 1;
    } else {
        return -1;
    }
})
console.table(ordered)

// const ordered = inventors.sort((a,b) => a.year > b.year ? 1 ; -1);

const totalYears = inventors.reduce((total, inventor) =>{
    return total + (inventor.passed - inventor.year);
}0);

console.log(totalYears);

const oldest = inventors.sort(function(a, b) {
    const lastGuy = a.passed - a.year;
    const nextGuy = b.passed - b.year;

    if (lastGuy >  nextGuy) {  //refer to line 24  for clearner version
        return -1
    } else
    return 1;
});
console.log(oldest); //or console.table(oldest)

const category = document.querySelector('.mw-category');
const links = Array.from(category.querySelectorAll('a')); //array.from places in arraay

const de = links.map(link => link.textContent);
.map(link => link.textContent)
.filter(streetName => streetName.includes('de'));


 const peeps = people.sort(function(lastOne, firstOne){
    const [lastA, firstA] = firstOne.split(',');
    const [lastB, firstB] = lastOne.split(',');
     // this will allow us to have first and last name split
 return lastA > lastB ? 1 : -1: //questions about this part
    console.log(peeps);
 })


 const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
