// Get all the countries from Asia continent /region using Filter function
let xhr = new XMLHttpRequest();
xhr.open("GET" , 'https://restcountries.com/v3.1/all');
xhr.send();
let data=[];
xhr.onload = function(){
    data = JSON.parse(xhr.response);
    console.log(data)
    const result = data.filter(e=>e.continents[0]==='Asia')
    result.map(e=>console.log('Country in Asia continent is '+e.name.common));

// Get all the countries with a population of less than 2 lakhs using Filter function
    const res1 = data.filter(e=>e.population<200000)
    res1.map(e=>console.log('Population less than 2 lakhs is '+ e.name.common));
//Print the following details name, capital, flag, using forEach function
    data.forEach(element => {
     console.log('Countries name is '+element.name.common + ', its capital is '+ element.capital + 'and its flag is '+element.flag);
   });
// Print the total population of countries using reduce function
 let carry = 38718; 
 const pop = data.map(e=>e.population);
 let sum= pop.reduce((carry,acc)=>{
    return carry+acc;
 })
 console.log('Total Population is '+sum);


//Print the country that uses US dollars as currency.
const cur = data.filter(e=>e.currencies?.USD)
cur.map(e=>console.log('Countries that uses US dollars is '+e.name.common));

}
