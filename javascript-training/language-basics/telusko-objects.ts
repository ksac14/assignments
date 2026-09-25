const input = 'name'
let alien = {
    name       : 'Navin',   //Key-value pair
    technology :  'JS',
    'work experience'     :  5
}
/* console.log(typeof alien)
console.info(alien) */
console.log(alien.name)   // objectName.property
console.log(alien.technology)
console.log(alien[input])

// Object Methods :

//1. 
let alien1 = {
    name : 'Navin',
    tech : 'JS',
    laptop1 : {
    brand1  : 'Asus',
    cpu    : 'I7',
    ram    : 4
    }

}
console.log("#######################")
console.log(alien1.laptop?.brand?.length)

// delete alien1.laptop1
// console.log(alien1)
// delete alien1.tech
// console.log(alien1)

// for in loop is used for objects
for(let key, value in alien1.laptop1)
{
    console.log(key, value)
}