let empHike = new Map<string, number>()

function calculateHike(name: string, baseSalary: number,experience:number , yearEndRating :number) : number {
    let variablePay: number = 0;
    let bonus: number = 0;
    
    if(yearEndRating>=4) {
        variablePay = 0.15
        bonus = 1500
    }
    else if(yearEndRating>3) {
        variablePay = 0.1
        bonus = 1200
    }
    else {
        variablePay = 0.03
        bonus = 300
    }
    let reward : number = experience>=5 ? 5000 : 0
    let hike:number = (baseSalary*variablePay) + bonus + reward
    let hikePercentage : number = (hike/baseSalary) * 100
    empHike.set(name, hikePercentage)
    
    
}
calculateHike("Alice Johnson", 75000, 5.1, 4.2);
calculateHike("Bob Smith", 68000, 3.2, 3.8);
calculateHike("Carol Davis", 82000, 7.1, 4.5);
calculateHike("David Brown", 90000, 10.2, 2.5);
calculateHike("Eva Green", 60000, 2.4, 3.5);

console.log(empHike);