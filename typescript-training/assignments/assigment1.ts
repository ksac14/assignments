// 1. Temperature of a city in degrees Celsius: 25.5
let temp : number = 25.5;
console.log(`1. Temperature of a city in degrees Celsius: ${temp}`);
// 2. Whether a customer has placed an order: true or false
let orderStatus : boolean = true
console.log(`2. Whether a customer has placed an order: ${orderStatus}`);
// 3. Person's phone number: "123-456-7890"
let phoneNumber : string =  "123-456-7890"
console.log(`3. Person's phone number: ${phoneNumber}`);
// 4. Amount of money in a customer's bank account: 1000.50
let amount : number = 1000.50
console.log(`4. Amount of money in a customer's bank account: ${amount}`);
// 5. Person's email address: "john.doe@example.com"
let emailAddress : string = "john.doe@example.com"
console.log(`5. Person's email address: ${emailAddress}`);
// 6. Coordinates of a location (latitude, longitude): 37.7749, -122.4194
let coordinates:[number,number] = [ 37.7749, -122.4194]
console.log(`6. Coordinates of a location (latitude, longitude): ${coordinates[0]}, ${coordinates[1]}`);
// 7. Person's marital status: true or false
let maritalStatus: boolean = false
console.log(`7. Person's marital status: ${maritalStatus}`);
// 8. Person's occupation: "Software Engineer"
// 9. Person's favourite colour: "Blue"
//7,8,9 (alternative way)
interface personInfo  {
    'Person marital status' : boolean,
    "Person's occupation"   : string,
    "Person's favourite colour" : string

}
let personData : personInfo = {
    'Person marital status' : true,
    "Person's occupation"   : "Software Engineer",
    "Person's favourite colour" : "Blue"
}
console.log(`7. Person's marital status: ${personData['Person marital status']}`);
console.log(`8. Person's occupation: ${personData["Person's occupation"]}`);
console.log(`9. Person's favourite colour: ${personData["Person's favourite colour"]}`);

// 10.Current year: 2023
let currentYear : number = 2023
console.log(`10. Current year: ${currentYear}`);
// 11.Number of followers on a social media platform: 1,000,000
let noOfFollowers : number = 1_000_000
console.log(`11. Number of followers on a social media platform: ${noOfFollowers}`);
// 12.Rating of a movie: 7.5
let movieRating : number = 7.5
console.log(`12. Rating of a movie: ${movieRating}`);
// 13.Person's blood type: 'A'
const bloodGroup : string = 'A'
console.log(`13. Person's blood type: ${bloodGroup}`);
// 14.Title of a book: "To Kill a Mockingbird"
const bookTitle : string = "To Kill a Mockingbird"
console.log(`14. Title of a book: ${bookTitle}`);
// 15.Number of employees in a company: 500
const noOfEmployee : number = 500
console.log(`15. Number of employees in a company: ${noOfEmployee}`);
// 16.Time of an event: 2:30 PM
const eventTime: string = "2:30 PM"
console.log(`16. Time of an event: ${eventTime}`);
// 17.Name of a country: "United States"
let country : string = "United States"
console.log(`17. Name of a country: ${country}`);
// 18.Person's eye color: "Brown"
// 19.Person's birthplace: "New York City"
 
interface personDetail {
    eyeColor : string,
    birthplace : string
}

let personInformation: personDetail = {
     eyeColor : "Brown",
    birthplace : "New York City"
}
console.log(`18. Person's eye color: ${personInformation.eyeColor}`);
console.log(`19. Person's birthplace: ${personInformation.birthplace}`);

// 20. Distance between two cities: 200.5
let distance: number = 200.5
console.log(`20. Distance between two cities: ${distance}`);
