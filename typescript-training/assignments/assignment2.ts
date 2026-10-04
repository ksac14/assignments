let checkLoanEligibility = function (customerName:string, creditScore:number,income:number,isEmployed:boolean,debtToIncomeRatio:number) : string {
    if(creditScore>750) {
        return "Congratulations!. The loan is automatically approved"
    }
    else if(creditScore>=650) {
        if(income>=50000 && isEmployed===true &&debtToIncomeRatio<40){
            return "Congratulations!. The loan is automatically approved"
        }
        else {
            return "Sorry! The loan is denied"
        }
        }
    else {
        return "Sorry! The loan is denied"
    }
        
    }
let customerName: string = "John Doe";
let creditScore:number = 650;
let income:number = 65000.0;
let isEmployed:boolean = true;
let debtToIncomeRatio:number = 45.0;
let checkLoanStatus = checkLoanEligibility(customerName,creditScore,income,isEmployed,debtToIncomeRatio)
console.log(checkLoanStatus)